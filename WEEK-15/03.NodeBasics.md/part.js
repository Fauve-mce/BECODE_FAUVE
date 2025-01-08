// Objectif divisé le code entre deux fichiers (main.js et part.js),

// Déclarer un tableau  
let Tableau = ["Chaine1", "Chaine2", "Chaine3"];

// Exporter le le fichier pour qu'il puisse être utilisé dans main.js
// module.exports = Tableau;

let pi = 3.14;
let Objet = {clé1: "Valeur1", clé2: "Valuer2", clé3: "Valeur3"};

module.exports = {Tableau, pi, Objet};
