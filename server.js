const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const ip = require('ip');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Servir les fichiers statiques (le jeu)
app.use(express.static(path.join(__dirname, '.')));

// Variable pour tracker le téléphone connecté (un seul autorisé)
let connectedPhone = null;

// WebSocket handling
wss.on('connection', (ws) => {
    console.log('Nouveau client connecté. Total clients:', wss.clients.size);

    ws.on('message', (message) => {
        const msgString = message.toString();
        console.log('Message reçu:', msgString);

        try {
            const data = JSON.parse(msgString);

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
        } catch (e) {
            // Pas un JSON, continuer normalement
        }

        console.log('Nombre de clients pour broadcast:', wss.clients.size - 1);

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
