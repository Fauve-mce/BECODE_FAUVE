const http = require('http');

// Créer un serveur HTTP
const server = http.createServer((req, res) => {
    // Enregistrer l'URL et la méthode dans la console
    console.log(`URL: ${req.url}`);
    console.log(`Method: ${req.method}`);

    // Configurer l'en-tête de la réponse pour le HTML
    res.setHeader('Content-Type', 'text/html');

    // Envoyer une réponse HTML
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Server Page</title>
        </head>
        <body>
            <h1>This is my awesome title from the server</h1>
            <a href="/services">I am an anchor tag</a>
        </body>
        </html>
    `;

    res.end(htmlContent);
});

// Le serveur écoute sur le port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
