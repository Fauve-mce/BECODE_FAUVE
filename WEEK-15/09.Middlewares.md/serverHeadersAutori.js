const express = require("express");
const app = express();

app.use(express.json()); // Pour analyser le corps des requêtes JSON

// Middleware pour afficher l'en-tête Authorization pour débogage
app.use((req, res, next) => {
    console.log("Authorization Header:", req.get("Authorization")); // Afficher l'en-tête Authorization pour débogage
    next();
});

// Ignorer les requêtes GET pour favicon.ico
app.get('/favicon.ico', (req, res) => res.status(204).send()); // 204 : No Content

// Middleware pour vérifier l'en-tête Authorization
app.use((req, res, next) => {
    if (req.method === 'POST' && req.get("Authorization") === "123") {
        next(); // Si Authorization est valide, passer à la route suivante
    } else {
        res.status(401).send("Non autorisé"); // Si Authorization est incorrect
    }
});

// Route POST sur la racine
app.post("/", (req, res) => {
    res.send("Hello World");
});

// Démarrage du serveur
app.listen(3000, () => {
    console.log("Le serveur écoute sur le port 3000");
});

