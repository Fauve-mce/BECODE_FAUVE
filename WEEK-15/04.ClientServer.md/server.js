// Importer le module 'http'
const http = require('http');

//1. Créer un serveur 
const server = http.createServer((req,res) =>{ //Fonction Callback
    console.log('Arequest was made.');

    //Envoyer une réponse au client 
    res.end('Hello, World!');
});

//2. Le serveur écoute sur le port 3000
server.listen(3000, () =>{
    console.group(`Listening for requests on port 3000`);
});