const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const ip = require('ip');

const fs = require('fs');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const SCORES_FILE = path.join(__dirname, 'scores.json');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

// Lire les scores depuis le fichier
function readScores() {
    try {
        const data = fs.readFileSync(SCORES_FILE, 'utf8');
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

// Sauvegarder les scores dans le fichier
function writeScores(scores) {
    fs.writeFileSync(SCORES_FILE, JSON.stringify(scores, null, 2));
}

// GET /api/scores - Récupérer le classement
app.get('/api/scores', (req, res) => {
    const scores = readScores();
    // Trier par score décroissant
    scores.sort((a, b) => b.score - a.score);
    res.json(scores);
});

// POST /api/scores - Enregistrer un score
app.post('/api/scores', (req, res) => {
    const { pseudo, score, level } = req.body;
    if (!pseudo || score === undefined || !level) {
        return res.status(400).json({ error: 'pseudo, score et level requis' });
    }
    const scores = readScores();
    scores.push({ pseudo, score, level, timestamp: Date.now() });
    writeScores(scores);
    res.json({ success: true });
});

// Variable pour tracker le téléphone connecté (un seul autorisé)
let connectedPhone = null;

// WebSocket handling
wss.on('connection', (ws) => {
    console.log('Nouveau client connecté. Total clients:', wss.clients.size);

    ws.on('message', (message) => {
        const msgString = message.toString();
        console.log('Message reçu:', msgString);

        let data;
        try {
            data = JSON.parse(msgString);
        } catch (e) {
            console.log('Message non-JSON reçu, ignoré');
            return;
        }

        // Gérer la connexion du téléphone
        if (data.type === 'PHONE_CONNECTED') {
            if (connectedPhone !== null && connectedPhone !== ws && connectedPhone.readyState === WebSocket.OPEN) {
                // Un téléphone est déjà connecté, rejeter cette connexion
                console.log('❌ Connexion téléphone refusée - un téléphone est déjà connecté');
                ws.send(JSON.stringify({ type: 'PHONE_REJECTED', reason: 'Un autre téléphone est déjà connecté' }));
                ws.close();
                return;
            } else {
                // Accepter cette connexion comme le téléphone actif
                connectedPhone = ws;
                console.log('✅ Téléphone connecté et enregistré');
            }
        }

        console.log('Nombre de clients pour broadcast:', wss.clients.size - 1);

        // Force disconnect all other clients
        if (data.type === 'FORCE_DISCONNECT_ALL') {
            console.log('🔌 Force déconnexion de tous les clients');
            let closedCount = 0;
            wss.clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ type: 'FORCE_DISCONNECT' }));
                    client.close();
                    closedCount++;
                }
            });
            connectedPhone = null;
            console.log(`🔌 ${closedCount} client(s) déconnecté(s) de force`);
            ws.send(JSON.stringify({ type: 'FORCE_DISCONNECT_DONE', count: closedCount }));
            return;
        }

        // Broadcast le message à tous les clients (pour simplifier)
        // Idéalement : Controller -> Server -> Game
        let sentCount = 0;
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(msgString);
                sentCount++;
            }
        });
        console.log('Message envoyé à', sentCount, 'client(s)');
    });

    ws.on('close', () => {
        // Si c'était le téléphone connecté, libérer le slot
        if (connectedPhone === ws) {
            connectedPhone = null;
            console.log('📱 Téléphone déconnecté - slot libéré');
        }
        console.log('Client déconnecté. Clients restants:', wss.clients.size);
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
