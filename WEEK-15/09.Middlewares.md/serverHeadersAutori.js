const express = require("express");
const app = express();

app.use(express.json()); // Pour analyser le corps de la requête si besoin (gestion des corps de requêtes JSON)

// Middleware pour vérifier l'en-tête Authorization
app.use((req, res, next) => {
    if (req.get("Authorization") === "123") {
    next();
    } else {
        res.status(401).send("Non autorisé");
    }
});

// Route POST sur la racine
app.post("/", (req, res) => {
    res.send("Hello World");
});

// Démarrage du serveur
app.listen(3000, () => {
    console.log("Écoute sur le port 3000");
});
