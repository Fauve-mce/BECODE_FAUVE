// On importe le module express pour créer des routes et gérer les requêtes HTTP.
const express = require('express');

// On importe le module path qui permet de manipuler les chemins de fichiers de manière portable.
const path = require('path');

// On crée un objet router d'Express pour gérer les routes.
const router = express.Router();

// Middleware pour enregistrer la méthode de la requête, l'URL et le code d'état. Permet suivre facilement les requêtes entrantes et leur état de réponse, ce qui est utile pour le débogage et la surveillance du serveur.
router.use((req, res, next) =>{
    res.on('finish', () =>{
        console.log(`${req.method} ${req.url} ${res.statusCode}`);
    });
    next();
});

// Route pour la page d'accueil (URL "/").
// Cette route répond aux requêtes GET à l'URL racine "/" en envoyant le fichier home.html.
router.get('/', (req, res) => {
    // `path.join(__dirname, 'home.html')` permet de créer un chemin absolu vers le fichier home.html
    // Cela garantit que le fichier est correctement localisé indépendamment du système d'exploitation.
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Route pour la page "About" (URL "/about").
// Cette route répond aux requêtes GET à l'URL "/about" en envoyant le fichier about.html.
router.get('/about', (req, res) => {
    // Idem pour le fichier about.html, ce fichier sera renvoyé à l'utilisateur.
    res.sendFile(path.join(__dirname, 'about.html'));
});

// Redirection de l'URL "/about-us" vers l'URL "/about".
// Cette route répond aux requêtes GET à l'URL "/about-us" et redirige l'utilisateur vers "/about".
// Le code de redirection 301 indique que c'est une redirection permanente.
router.get('/about-us', (req, res) => {
    // Utilisation de res.redirect() pour effectuer la redirection.
    // Le code HTTP 301 signifie que la redirection est permanente.
    res.redirect(301, '/about');
});

// Gestion des requêtes POST à la racine "/".
// Cette route permet de recevoir des données via une requête POST et renvoie un objet JSON en réponse.
router.post('/', (req, res) => {
    // On renvoie un objet JSON.
    res.json({
        school: "BeCode", 
        year: "2023"      
    });
});

// Middleware pour la gestion des erreurs 404 (page non trouvée).
// Cette route est exécutée si aucune autre route ne correspond à la requête de l'utilisateur.
router.use((req, res) => {
    // On définit le code d'état 404 pour indiquer que la page demandée n'a pas été trouvée.
    // Ensuite, on envoie le fichier 404.html comme réponse pour afficher une page d'erreur personnalisée.
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// On exporte le router pour pouvoir l'utiliser dans d'autres fichiers (par exemple dans server.js).
module.exports = router;

