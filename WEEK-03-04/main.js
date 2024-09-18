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
