//01.ALGOS-série1 00.exo.md
// function dix(a, b){
//     if(a === 10 || b === 10){
//         return true;
//     } else if (a + b === 10){
//         return true;
//     }else {
//         return false;
//     }
// }

// console.log(dix(9, 10));
// console.log(dix(7, 3));
// console.log(dix(3, 6));




//01.ALGOS-série1 01.exo.md
// function age (yearday){
//     if (yearday === 0){
//         return 0;
//     }else {
//         return yearday * 365;
//     }
// }

// console.log(age(27));
// console.log(age(29));
// console.log(age(54));




//01.ALGOS-série1 02.exo.md
// function addUp(num){
//     let addone = 0;

//     for(let i = 1; i <= num; i++){
//         addone += i
//     }
//     return addone;
// }

// console.log(addUp(8));
// console.log(addUp(500));
// console.log(addUp(25));




//01.ALGOS-série1 03.exo.md
// function minMax(arr){
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);

//     return[min, max];
// }

// console.log(minMax([5, 6, 8, 2]));
// console.log(minMax([7, 12, 42, 29, 6]));
// console.log(minMax([35, 2, 14, 6, 78, 94]));




//01.ALGOS-série1 04.exo.md
// function detectWord(string){
//     let minus ='';

//     for(let i= 0; i < string.length; i++){
//         if (string[i] === string[i].toLowerCase()){
//             minus += string[i];
//         }
//     }
//     return minus;
// }

// console.log(detectWord("JHDpJoJDNFJBFDDmFHGYVJmIDeHFU"));
// console.log(detectWord("IHNCJQbJSDlSNDoJBDeCBJFmSDGU"));
// console.log(detectWord("DFGYUEIFpHSGDDeJSDnUSDH"));




//01.ALGOS-série1 05.exo.md
// let drinks = [
//     {name: "lemonade", price: 10},
//     {name: "lime", price: 10},
//     {name: "coke", price: 8},
//     {name: "vodka", price: 17},
//     {name: "water", price: 3},
// ]

// function comparePrices(a, b){

//     if (a.price < b.price){
//         return -1;
//     }
//     if (a.price > b.price){
//         return 1;
//     }
//     return 0;
// }

// drinks.sort(comparePrices);
// console.log(drinks);




//01.ALGOS-série1 06.exo.md
// function animaux (chickens, cows, pigs) {
//     let total = (chickens * 2) + (cows * 4) + (pigs * 4);
//     return total;
// }

// console.log(animaux(1, 2, 2));
// console.log(animaux(5, 7, 1));
// console.log(animaux(10, 3, 4));




//01.ALGOS-série1 07.exo.md
// function profitableGamble(proba, prix, salaire){
//     if (proba * prix > salaire){
//         return  true;
//     }else{
//         return false;
//     }
// }

// console.log(profitableGamble(0.2, 50, 9));
// console.log(profitableGamble(0.9, 1, 2));
// console.log(profitableGamble(0.9, 3, 2));




//01.ALGOS-série1 08.exo.md
// function frames(min, fps){
//     return min * 60 * fps;
// }

// console.log(frames(1,6));
// console.log(frames(4,9));
// console.log(frames(10,17));




//01.ALGOS-série1 09.exo.md
// function calculateFuel(km){
//     let needFuel = km * 10;
//     return needFuel < 100 ? 100 : needFuel;
// }
// console.log(calculateFuel(15));
// console.log(calculateFuel(6));
// console.log(calculateFuel(52.9));




//02.ALGOS-série2 00.exo.md
// function countTrue(arr){
    
//     if (arr.length === 0){
//         return 0;
//     }
    
//     let counter = 0;

//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] === true){
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log(countTrue([true, false, false, true, false]));

// console.log(countTrue([false, false, false, false])) ;

// console.log(countTrue([])) ;


// function countTrue(arr){
//     if (arr.length === 0){
//         return 0;
//     }
//     return arr.filter(Boolean).length;
// }

// console.log(countTrue([true, false, false, true, false]));

// console.log(countTrue([false, false, false, false])) ;

// console.log(countTrue([])) ;



// function countFalse(arr){
//     if (arr.length === 0){
//         return 0;
//     }
//     return arr.filter(valeur => valeur === false).length;
// }

// console.log(countFalse([true, false, false, true, false]));

// console.log(countFalse([false, false, false, false])) ;

// console.log(countFalse([])) ;




//02.ALGOS-série2 01.exo.md
// function possibleBonus(a, b){
//     if(a === b || b < a){
//         return false;
//     }
//     return b >= a + 1 && b <= a + 6;
// }

// console.log(possibleBonus(5,3));
// console.log(possibleBonus(3,7));
// console.log(possibleBonus(1,9));




//02.ALGOS-série2 02.exo.md
// function num_of_digits(num){
//     if (num == 0){
//         return 1;
//     }
//     return String(num).length;
// }

// console.log(num_of_digits(1000)); 
// console.log(num_of_digits(12));   
// console.log(num_of_digits(1305981031));  
// console.log(num_of_digits(0));  




//02.ALGOS-série2 03.exo.md
//     newtab = []
// function switchObj(toArray){
//     newtab = Object.entries(toArray);
//     return console.log(newtab);
// }




//02.ALGOS-série2 04.exo.md
// function arrayOfMultiples(num, length){
//     newtab = [] 
//     for(let i= 0; i <= length; i++){
//         newtab.push(i * num);
//     }
//     return newtab
// }
// console.log(arrayOfMultiples(7, 5));
// console.log(arrayOfMultiples(6, 7));
// console.log(arrayOfMultiples(4, 10));





//02.ALGOS-série2 05.exo.md
// function removeLeadingTrailing(n){
//     if(Number.isInteger(n)){
//         return n;
//     }
//     return parseFloat(n).toFixed(3);
// }
// console.log(removeLeadingTrailing(230.000));
// console.log(removeLeadingTrailing("00402"));
// console.log(removeLeadingTrailing("03.1400"));
// console.log(removeLeadingTrailing(30));




//02.ALGOS-série2 06.exo.md
// let array = [4, 1, 7]
// array.sort(function sortInt(num1, num2){
//     return num1 - num2;
// })

// console.log(array);




//02.ALGOS-série2 07.exo.md
// function calculator(num1, op, num2){
//     if (op == "+"){
//         return num1 + num2;
//     } else if (op == "-"){
//         return num1 - num2;
//     }else if (op == "*"){
//         return num1 * num2;
//     }else if (op == "/"){
//         return num1 / num2;
//     }
// }

// console.log(calculator(2, "+", 2));
// console.log(calculator(7, "*", 3));
// console.log(calculator(6, "/", 2));




//02.ALGOS-série2 08.exo.md
// function areaOfCountry(pays, spfc){
//     globe = 148940000;
//     spfc = ((spfc/globe)*100).toFixed(2);
//     return ( ` ${pays} is ${spfc} % of the total words landmass`)

// }
// console.log(areaOfCountry("Russia", 17098242));





//02.ALGOS-série2 09.exo.md
// function reverseWords(string){

// }
// console.log(reverseWords("the sky is blue"));




//02.ALGOS-série3 00.exo.md
// function oddishOrEvenish(number){
//     var sum = 0;
//     while(number > 0){
//         const digit = sum % 10;
//         sum += digit;
//         number = Math.floor(number / 10);
//     }
//     return sum%2 === 0 ? "Evenish" : "Oddish";
// }
// console.log(oddishOrEvenish(3));
//le oddish ne fonctionne pas! a revoir


//02.ALGOS-série3 01.exo.md
// function getTotalPrice(épicerie){

//     var total = 0;
//     for(let product of épicerie){
//         total += product.quantity * product.price;
//     }
//     return total;
// }

// console.log(getTotalPrice([{product: "Milk", quantity: 1, price: 1.50}]));
// console.log(getTotalPrice([{product: "Milk", quantity: 3, price: 1.50}]));
// console.log(getTotalPrice([{product: "Milk", quantity: 1, price: 1.50},{product: "Cereals", quantity: 1, price: 2.50}]));




//02.ALGOS-série3 02.exo.md
// function reverseOdd(sss){
    
//     let mots = sss.split(" ");
    
//     for(let i = 0; i < mots.length; i++){
//         let nombresDeLettres = mots[i].length;
        
//             if(nombresDeLettres%2 !== 0){
//                 mots[i] = mots[i].split("").reverse().join("");
//             }
//     }
//     return mots.join(" ");   
// }

// console.log(reverseOdd("Bananas"));
// console.log(reverseOdd("One two trhee four"));




//02.ALGOS-série3 03.exo.md
// function isSmooth(bool){
//     const motLiss = bool.toLowerCase().split(" "); // convertire en minuscules (pour ignorer la casse des lettres maj. ou min.) //ensuite on divise en un tableau de mots,qu'on vas séparer par des espaces.
//     for(let i = 0; i < motLiss.length -1; i++){ // On parcourt chaque mot du tableau, en s'arretant un mot avant la fin pour pouvoir comparer avec le mot suivant.
//         const lastLetter = motLiss[i].slice(-1); // récupère la dernière lettre du mot. La méthode splice(-1) prend le dernier caractère du mot.
//         const firstLetter = motLiss[i + 1].charAt(0); // récupère la première lettre du mot sivant. La méthode charAt(0) donne le premier caractère d'une chaîne.

//         if (lastLetter !== firstLetter) { // Si la dernière lettre du mot actuel est différente de la première lettre du mot suivant
//             return false; // alors la phrase n'est pas fluide, on arrête la fonction et on retourne false.
//         }
//         return true; // Si on a parcouru tous les mots sans trouver de différence, cela signifie que la phrase est fluide, on retourne true.
//     }
// }
// console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"));
// console.log(isSmooth("Someone is outside the doorway"));
// console.log(isSmooth("She eats super righteously"));




//02.ALGOS-série3 04.exo.md
// function sevenBoom(brr){

//     for(let i =0; i< brr.length; i++){
//         if(brr[i].toString().includes('7')){
//             return "Boom!";
//         }
//     }
//             return "there is no 7 in the array";
// }

// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
// console.log(sevenBoom([8, 6, 33, 100]));
// console.log(sevenBoom([2, 55, 60, 97, 86]));




//02.ALGOS-série3 05.exo.md
// function convertirTemperature(temperature) {
//     // On vérifie si la température est en Celsius ou en Fahrenheit
//     const unite = temperature.slice(-2); 

//     // On extrait la valeur numérique de la température
//     const valeur = parseFloat(temperature.slice(0, -1));

//     // Si la valeur n'est pas un nombre, on arrête là
//     if (isNaN(valeur)) {
//     return "Erreur : la température doit être un nombre.";
//     }

//     // On effectue la conversion en fonction de l'unité
//     if (unite === "°C") {
//       // De Celsius à Fahrenheit
//       return Math.round(valeur * 9/5 + 32) + "°F";
//     } else if (unite === "°F") {
//       // De Fahrenheit à Celsius
//       return Math.round((valeur - 32) * 5/9) + "°C";
//     } else {
//     return "Erreur : unité inconnue. Utilisez °C ou °F.";
//     }
// }

// console.log(convertirTemperature("35°C")); // Affiche 95°F
// console.log(convertirTemperature("19°F")); // Affiche -7°C
// console.log(convertirTemperature("33"));   // Affiche "Erreur : unité inconnue. Utilisez °C ou °F."




//02.ALGOS-série3 06.exo.md
// function findBrokenKeys(correct, typed) {
//     // Tableau pour stocker les clés cassées
//     const brokenKeys = [];

//     // Parcour chaque caractère des deux chaînes en parallèle
//     for (let i = 0; i < correct.length; i++) {
//     const correctChar = correct[i];
//     const typedChar = typed[i];

//       // Si les caractères sont différents et que la clé n'a pas déjà été ajoutée
//     if (correctChar !== typedChar && !brokenKeys.includes(correctChar)) {
//         brokenKeys.push(correctChar);
//     }
//     }

//     return brokenKeys;

// }
