const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = 3000;

// Utiliser les routes définies dans routes.js
app.use('/', routes);

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});

