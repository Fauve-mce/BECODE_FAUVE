// #region EXERCICE 1

// // Sélectionne tous les boutons de la page
// const buttons = document.querySelectorAll('button');

// // Attache un gestionnaire d'événement de clic à chaque bouton
// buttons[0].addEventListener('click', function() {
//     alert('Oh my God ! You again !!!');
// });

// buttons[1].addEventListener('click', function() {
//     alert("Thank God ! I thought you'd never leave !");
// });

// comme ils n'ont pas d'identifiant ID ou Class on utilise querySelectorAll pour crée une pseudo Array et trouver les position de buttons.

// #endregion

// #region EXERCICE 2

// Sélectionne tous les boutons
// const buttons = document.querySelectorAll('button');

// buttons.forEach(button => {
//     button.addEventListener('click', function() {
//     // Sélectionne le paragraphe qui suit directement le bouton
//     const paragraph = this.nextElementSibling;

//     // Basculer la visibilité du paragraphe
//     paragraph.classList.toggle('hidden');

//     // Changer le texte du bouton en fonction de l'état du paragraphe
//     if (paragraph.classList.contains('hidden')) {
//       this.textContent = 'Open tab';  // Paragraphe caché, bouton "Ouvrir"
//     } else {
//       this.textContent = 'Close tab';  // Paragraphe visible, bouton "Fermer"
//     }
// });
// });

// #endregion

// #region EXERCICE 3

// // Fonction pour générer un nombre aléatoire entre 0 et 255
// function getRandomColorValue() {
//     return Math.floor(Math.random() * 256);
// }

// // Sélectionner le bouton et le h1
// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// // Ajouter un gestionnaire d'événement au bouton
// button.addEventListener('click', function() {
// // Générer trois valeurs aléatoires pour RGB
//     const r = getRandomColorValue();
//     const g = getRandomColorValue();
//     const b = getRandomColorValue();

// // Créer la chaîne de couleur RGB
//     const rgbColor = `rgb(${r}, ${g}, ${b})`;

// // Changer la couleur d'arrière-plan du body
//     document.body.style.backgroundColor = rgbColor;

// // Mettre à jour le texte du h1 avec la valeur RGB
//     h1.textContent = rgbColor;
// });

// #endregion
