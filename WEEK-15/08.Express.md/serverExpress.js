// On importe la librairie express qui permet de créer un serveur web avec Node.js.
const express = require('express');
// On importe le fichier 'routes.js' où les routes seront gérées séparément du fichier principal.
const routes = require('./routes');
// On crée une instance de l'application Express
const app = express();
const PORT = 3000;

// Utiliser le fichier 'routes.js' pour définir les routes de notre serveur
// app.use() permet d'enregistrer un middleware pour toutes les routes qui commencent par '/'
// Ici, toutes les requêtes à la racine (/) et ses sous-routes seront gérées par le fichier routes.js
app.use('/', routes);

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});

