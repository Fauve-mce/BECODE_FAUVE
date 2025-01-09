const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Log des requêtes
    console.log(`URL: ${req.url}`);
    
    // Si la requête est pour la racine "/"
    if (req.url === '/') {
        // Envoie le fichier index.html avec un code de statut 200
        fs.readFile(path.join(__dirname, 'views', 'index.html'), 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading HTML file');
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    }
    // Si la requête est pour la page à propos "/about"
    else if (req.url === '/about') {
        // Envoie le fichier about.html avec un code de statut 200
        fs.readFile(path.join(__dirname, 'views', 'about.html'), 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading HTML file');
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    }
    // Si la requête est pour "/about-us", redirige vers "/about" avec un code de statut 301
    else if (req.url === '/about-us') {
        res.statusCode = 301;
        res.setHeader('Location', '/about'); // Redirige vers "/about"
        res.end();
    }
    // Pour toute autre URL, renvoie le fichier 404.html avec un code de statut 404
    else {
        fs.readFile(path.join(__dirname, 'views', '404.html'), 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading HTML file');
                return;
            }
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    }
});

// Le serveur écoute sur le port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
