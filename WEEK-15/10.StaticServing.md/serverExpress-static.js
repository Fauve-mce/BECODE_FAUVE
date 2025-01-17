const express = require("express");
const path = require("path");
const app = express();

// Utilisation de express.static pour rendre le dossier 'public' accessible
app.use(express.static(path.join(__dirname, "public")));

// Route pour la page d'accueil
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "indexExpress-static.html"));
});

// Route pour la page "About"
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"));
});

// Démarrage du serveur
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
