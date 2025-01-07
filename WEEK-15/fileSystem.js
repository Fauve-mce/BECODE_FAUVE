// Importer le module 'fs' (File System)
const fs = require('fs');
const path = require('path');

//Nom du répertoire et du fichier
const dirName = './test'; // Variable qui contient le chemin relatif du répertoire dirName.
const fileName = path.join(dirName, 'notes.text'); //Combine le répertoire dirName avec le nom du fichier notes.txt , cela crée un chemin complet comme -> ()./test/notes.txt). path.join() crée un chemin de fichier correct peut importe le systeme d'exploitation (Windows utilise \ alors que macOS utilise /).

//1. Vérifie si le répertoire 'test' existe, sinon le crée.
if (!fs.existsSync(dirName)){
    fs.mkdirSync(dirName); // Crée le répertoire 'test'
    console.log(`Répertoire '${dirName}' crée avec succès.`);
} else {
    console.log(`Fichier '${dirName}' existe déjà`);
}

//2.Crée le fichier 'notes.txt' avec son contenu initial
fs.writeFileSync(fileName, 'I am a Becode warrior', 'utf8'); // fs -> Module. writeFileSync -> Méthode qui permet d'écrire des données dans un fichier de manière synchrone. 'utf8' -> Spécifie l'encodage utilisé. Permet de stocker des caractères dans presque toutes les langues. Garentit que le centenu est enregistré en tant que text lisible.
console.log(`Fichier '${fileName}' crée avec succès`);

