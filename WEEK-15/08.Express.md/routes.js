const express = require('express');
const path = require('path');
const router = express.Router();

// Route pour la page d'accueil
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Route pour la page "About"
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// Redirection de /about-us vers /about
router.get('/about-us', (req, res) => {
    res.redirect(301, '/about'); // 301 pour une redirection permanente
});

// Gestion des requêtes POST à la racine
router.post('/', (req, res) => {
    res.json({
        school: "BeCode",
        year: "2025"
    });
});

// Middleware pour la page 404
router.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'Page404.html'));
});

module.exports = router;
