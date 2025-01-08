// MODULE INTEGRES DE NODE.JS
// Objectif récupérer certaines informations du système d'exploitation et afficher dans la console.

// Importer le module 'os'
const os = require('os');

// 1. Récupérer/Affihcer la platforme du système d'exploitation.
// os est un module intégré de Node.js
// os.platform() c'est une méthode qui donne une chaîne qui représente la platforme de notre système d'exploitation.
const platforme = os.platform();
console.log(`la platforme  du système d'exploitation est : ${platforme}`);

//2. Récupérer/Afficher le répertoire personnel de l'utilisateur.
// Pour cela le module os a également une méthode appelé os.homedir() qui retourne le chemin du répertoire.
const repertoirePersonnel = os.homedir();
console.log(`Le répertoire personnel de l'utilisateur est : ${repertoirePersonnel}`);
