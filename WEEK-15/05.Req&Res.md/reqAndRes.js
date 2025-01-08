const http = require('http');

//1.Créer un serveur HTTP
const server = http.createServer((req,res) =>{
    //2.Enregistrer l'URL et la méthode dans la console
    console.log(`URL: ${req.url}`);
    console.log(`Method: ${req.method}`);

    //3.Configurer l'en-tête de la réponse
    res.setHeader('Content-Type', 'text/plain'); // Défini l'en-tête et indique que la réponse sera du texte brut.

    //Envoyer un réponse au client
    if(req.url === '/Hello') {
        res.end('Hello from the server');
    } else {
        res.end('Hello from the server')
    }
});

//4.Le serveur écoute sur le port 3000
server.listen(3000,() => {
    console.log('Server is running on http://localhost:3000');
});

//5.Vérifiez dans l'onglet Réseau de l'inspecteur du navigateur que le type de contenu de la réponse est bien text/plain

