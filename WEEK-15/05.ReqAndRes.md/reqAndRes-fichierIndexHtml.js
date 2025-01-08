// const http -> Cela assigne le module http à la constante http. Permet d'utiliser toutes les fonctions du modules dans le code. Par exemple (http.createServer()).
// La fonction require() pour importer des modules externes ou intégrés dans Node.js 
// Le module 'http' -> crée des servuers web. Contient des fonctionnalités pour gérer les requêtes HTTTP, envoyer des réponses et configurer un serveur web.
const http = require('http');
// `fs` est un module de Node.js qui permet de travailler avec les fichiers sur l'ordinateur.
// Par exemple, il nous aide à lire, écrire ou supprimer des fichiers.
// Ici, on l'importe pour pouvoir l'utiliser dans notre code afin de manipuler des fichiers.
// Dans ce cas, on l'utilise pour lire des fichiers comme notre fichier HTML.
// Cela nous permet de charger et d'envoyer des fichiers au client via notre serveur.
const fs = require('fs');
// `path` est un module de Node.js qui aide à manipuler les chemins de fichiers.
// Il nous permet de travailler avec des chemins de manière sûre et compatible avec tous les systèmes d'exploitation.
// Par exemple, il permet de joindre des parties de chemin pour créer un chemin complet vers un fichier.
// Cela nous aide à ne pas se tromper dans l'écriture des chemins, peu importe où on se trouve dans le projet.
// On l'utilise ici pour s'assurer que le chemin vers le fichier HTML est correct et fonctionne partout.
const path = require('path');

// Créer un serveur HTTP
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Si la route est la racine '/', envoie le fichier index.html
        fs.readFile(path.join(__dirname, 'views', 'index.html'), 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading HTML file');
                return;
            }
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    } else if (req.url === '/services') {
        // Si la route est '/services', retourne un message générique (ou un autre fichier HTML)
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Welcome to the Services Page</h1><p>Here are our services.</p>');
    } else {
        // Pour toutes les autres routes, renvoie "Page not found"
        res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// `__dirname` est un mot spécial que Node.js utilise. Il nous dit où se trouve le fichier avec lequel on travaille.
// Par exemple, si on a un fichier appelé `server.js`, `__dirname` va nous donner le chemin de ce fichier sur l'ordinateur.
// C'est comme une carte qui montre où est le fichier.

// Cela nous aide à trouver facilement des fichiers ou dossiers qui sont dans le même endroit que notre code.
// Par exemple, si on veut ouvrir un fichier HTML pour afficher une page web, `__dirname` nous indique exactement où chercher.
// Pratique pour s'assurer qu'on trouve toujours nos fichiers, même si le code change d'endroit !
