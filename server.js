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

// WebSocket handling
wss.on('connection', (ws) => {
    console.log('Nouveau client connecté. Total clients:', wss.clients.size);

    ws.on('message', (message) => {
        const msgString = message.toString();
        console.log('Message reçu:', msgString);
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
        console.log('Client déconnecté. Clients restants:', wss.clients.size);
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
