// // DECLARATION
// // On crée une fonction generateBG avec color et delay comme argument.
// // Cette fonction retourn une promesse avec resolve.
// // On utilise setTimeout pour attendre le nombre de milisecondes qui sera spécifié par delay pour changer la couleur de fond.
// // Après que la couleur change, la fonction appelle resolve() pour indiquer que l'opération est terminée.
// function generateBG(color, delay){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             document.body.style.background = color;
//             resolve();
//         }, delay)
//     });
// }

// // UTILISATION
// // La fonction changeBGcolor utilise  un mot-clé, async qui permetra d'utiliser await à l'interieur.
// // Await = On attend que la promesse se résolve avant de passé à la couleur suivante. Ici elle durera 1000 milisecondes (1sec).
// async function changeBGcolor(){
//     await generateBG("yellow", 1000);
//     await generateBG("red", 1000);
//     await generateBG("cyan", 1000);
//     await generateBG("violet", 1000);
//     await generateBG("green", 1000);
//     await generateBG("purple", 1000);
// }

// // Ici on fait une invocation de la fonction pour démarrer le processus de changement de coueleur.🎃🔮👻
// changeBGcolor();





// Avec un peu d'imprévisibilité :

// DECLARATION
// On crée une fonction generateBG avec color et delay comme argument.
// Cette fonction retourn une promesse avec cette fois ci sesolve et reject.
// On utilise setTimeout pour attendre le nombre de milisecondes qui sera spécifié par delay pour changer la couleur de fond.
// Après que la couleur change, la fonction appelle resolve() pour indiquer que l'opération est terminée.
// On génère un nombre aléatoire en utilisant le Math.random() qui comprend un nombre entre 0 et 0,999.
function generateBG(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if(randomNumber > 0.5){
                reject("oh no! an error");
            }else{
                document.body.style.background = color;
            resolve();
            }
        }, delay)
    });
}

// UTILISATION
// La fonction changeBGcolor utilise  un mot-clé, async qui permetra d'utiliser await à l'interieur.
// Await = On attend que la promesse se résolve avant de passé à la couleur suivante. Ici elle durera 1000 milisecondes (1sec).
// Ici on ajoute un block try dans lequel on met tout notre code qui potentiellement pourrait donner une erreur. Si try à une erreur il est transférée directement au block catch.
async function changeBGcolor(){
    try{
    await generateBG("yellow", 1000);
    await generateBG("red", 1000);
    await generateBG("cyan", 1000);
    await generateBG("violet", 1000);
    await generateBG("green", 1000);
    await generateBG("purple", 1000);
    } catch(error){
        console.log(error); // Affiche le "Oh no! an error"
    }
}

// Ici on fait une invocation de la fonction pour démarrer le processus de changement de coueleur.🎃🔮👻
changeBGcolor();