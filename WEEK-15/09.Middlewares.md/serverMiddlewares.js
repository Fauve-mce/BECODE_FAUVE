// Importation des modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialisation de l'application Express
const app = express();

// Middleware permet d'analyser les données de type x-www-form-urlencoded et de les rendre disponibles dans req.body. La valeur { extended: true } permet de parser des objets complexes dans les données envoyées.
app.use(bodyParser.urlencoded({ extended: true }));

// Route POST
app.post('/', (req, res) => {
  console.log(req.body); // Affiche le corps de la requête dans la console
    res.send('Données reçues');
});

// Base de données simulée
const usersDB = [
    { username: 'testUser', password: 'password123' },
    { username: 'admin', password: 'admin123' }
];

// Route POST avec validation des informations de connexion
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = usersDB.find(user => user.username === username && user.password === password);
    
    if (user) {
        res.send('Connexion réussie');
    } else {
        res.status(401).send('Utilisateur non trouvé');
    }
});

app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});
