// DECLARATION
// On crée une fonction generateBG avec color et delay comme argument.
// Cette fonction retourn une promesse.
// On utilise setTimeout pour attendre le nombre de milisecondes qui sera spécifié par delay pour changer la couleur de fond.
// Après que la couleur change, la fonction appelle resolve() pour indiquer que l'opération est terminée.
function generateBG(color, delay){
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.background = color;
            resolve();
        }, delay)
    });
}

// UTILISATION
// La fonction changeBGcolor utilise  un mot-clé, async qui permetra d'utiliser await à l'interieur.
// Await = On attend que la promesse se résolve avant de passé à la couleur suivante. Ici elle durera 1000 milisecondes (1sec).
async function changeBGcolor(){
    await generateBG("yellow", 1000);
    await generateBG("red", 1000);
    await generateBG("cyan", 1000);
    await generateBG("violet", 1000);
    await generateBG("green", 1000);
    await generateBG("purple", 1000);
}

// Ici on fait une invocation de la fonction pour démarrer le processus de changement de coueleur.🎃🔮👻
changeBGcolor();