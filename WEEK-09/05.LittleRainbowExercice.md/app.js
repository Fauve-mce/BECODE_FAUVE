// DECLARATION
// On ne met pas d'argument error/reject dans la fonction elle même car changeColor n'est pas censée lancer d'erreur.
// Par contre utiliser le .catch le final de la chaine de promesse est intéressant car il permet  de capturer une couleur incorrecte ou un bug potentiel dans changeClor.
function changeColor(color){
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.background = color;
            resolve();
        }, 1000)
    });
}

// UTILISATION
changeColor("blue")
    .then(() => changeColor("yellow"))
    .then(() => changeColor("red"))
    .then(() => changeColor("cyan"))
    .then(() => changeColor("violet"))
    .then(() => changeColor("green"))
    .then(() => changeColor("purple"))
    .catch((error) => console.log("Erreur la couleur na pas pu charger:", error));