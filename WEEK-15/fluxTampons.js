// Objectif crée un flux de lecture (read stream) et lire ce fichier.
// Ecouter les évènements data dans le flux de lecture. A chaque fois que un morceau de données arrive, il faut loguer ce morceau dans la concole et ajouter la ligne --------- CHUNK -------- pour voir la séparation entre les morceaux.

const fs = require('fs');

//1. Pour crée un nouveau flux de lecture:
const readStream = fs.createReadStream("./hugeText.html", {encoding: "utf8"});

//3. Crée un flux d'écriture:
const writeStream = fs.createWriteStream('./writeStream.html')

// Ecouter les morceaux de données qui arrivent 
readStream.on("data", (chunk) => { 
    console.log("--------- NEW CHUNK --------");
    console.log(chunk);
    //Ecrire chaque morceau de données dans un nouveau fichier
    writeStream.write(chunk);
});

//2. Convertir les tampons en texte.
// les tampons sont en faite des données binaire! donc il faut les convertir et pour cela il y a deux manière.
// Soit avec la méthode .toString()
// Soit avec encodage UTF8. --> Ajout à la ligne 7, on le passe comme second argument à createReadStream.

//4. Lorsque tout est terminé, fermer le flux d'écriture
readStream.on('end', () =>{
    console.log("Fin de la lecture de fichier.");
    writeStream.end(); // Fermer le flux d'écriture.
});

// Méthode pipe (écouteur comme data mais en simplifié)
readStream.pipe(writeStream);