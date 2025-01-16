const express = require("express");
const app = express();

// Middleware pour vérifier le mot de passe dans l'URL de la page /secret
function checkPassword(req, res, next) {
    // Vérifier si le paramètre 'password' est présent et s'il a la bonne valeur
    if (req.query.password === 'IAmTheBigBoss') {
        next(); // Si c'est correct, passer à la route suivante
    } else {
        res.status(403).send("Forbidden: Wrong password"); // Si ce n'est pas correct, renvoyer une erreur 403
    }
}

// Middleware pour servir la page HTML pour la route /
app.get("/", (req, res) => {
    res.send(`
        <html>
            <head><title>Home</title></head>
            <body><h1>Welcome to the Home Page</h1></body>
        </html>
    `);
});

// Middleware pour servir la page HTML pour la route /about
app.get("/about", (req, res) => {
    res.send(`
        <html>
            <head><title>About</title></head>
            <body><h1>Welcome to the About Page</h1></body>
        </html>
    `);
});

// Route /secret avec middleware de validation du mot de passe
app.get("/secret", checkPassword, (req, res) => {
    res.send(`
        <html>
            <head><title>Secret</title></head>
            <body><h1>Welcome to the Secret Page, Big Boss!</h1></body>
        </html>
    `);
});

// Démarrage du serveur
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});



//Séparation : Le middleware aide à séparer les différentes parties du code, comme vérifier le mot de passe et afficher la page. Cela rend le code plus clair et plus facile à gérer.

//Réutilisation : Le middleware checkPassword peut être utilisé pour d'autres pages si besoin, ce qui évite de répéter le même code plusieurs fois.

//Contrôle d'accès : Les middlewares permettent de vérifier si quelqu'un peut accéder à une page. Par exemple, checkPassword empêche les gens sans le bon mot de passe d'accéder à la page /secret.

