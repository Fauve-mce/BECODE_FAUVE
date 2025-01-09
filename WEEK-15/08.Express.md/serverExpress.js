const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Route pour la page "About"
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// Redirection de /about-us vers /about
app.get('/about-us', (req, res) => {
    res.redirect(301, '/about'); // 301 pour une redirection permanente
});

// Gestion des requêtes POST à la racine
app.post('/', (req, res) => {
    res.json({
        school: "BeCode",
        year: "2025"
    });
});

// Page 404 pour les routes non trouvées
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'Page404.html'));
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
