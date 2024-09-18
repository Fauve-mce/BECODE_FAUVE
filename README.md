# BECODE_CINDY

## 04b.Practice.md

On veut inverser les valeurs de A et B.
A l'ancienne on passe par une variable temporaire :

    1. On « sauvegarde » la valeur initiale de A dans --> TMP.
    2. On copie la valeur de B dans A.
    3. On copie la valeur antérieure de A (sauvegardée dans TMP), dans B.

## 06b.Pratique.md
### Ex2
- La méthode charAt() permet d'obtenir le caractère qui se trouve à une position donnée. Par exemple, word.charAt(0) renverra 'D', et word.charAt(4) renverra 'l'.
- word.length donne la longueur de la chaîne (dans ce cas, 10 pour 'Dumbledore').
==> Donc, word.length - 1 renvoie 9, qui est l'index du dernier caractère.
On mélange tout ça word.charAt(word.length - 1) pour avoir comme résultat "e".

## 08.Pratique.md 

### Ex2
Attention! Tu as oublier d'ajouter Number sans ton code.
la méthode prompt() renvoie toujours une chaîne de caractères (string), même si l'utilisateur entre un nombre. Donc ne pas oublié de faire la converstion.
Number = converti la chaîne en nombre.

## 11b.Exercice.md 

### Ex1
Ici chat n'était pas défini comme une chaîne de carractère lors de la comparaison.
Les chaînes de caractères doivent être entourées de guillemets. 


## 12b.Exercises.md

## Ex2
Il y avait moyen de le faire sans trop se cassé la tête. 
- "one" : On peut directement l'ajouter comme première valeur.
- "two" : On l'extrait de initialArray[2][1].
- "three" : On l'extrait de initialArray[4][0].
- "four" : On l'ajoute directement à la fin.

ce qui donne ==>

const result = ["one", initialArray[2][1], initialArray[4][0], "four"];

console.log(result);

et HOP voilà !
- En faite on extrait directement les éléments importants de sous-tableaux en accédant à la valeurs indices.
- On a pas bersoin d'utiliser des méthodes comme splice(), pop(), push(), ca rend le code bcp plus long et difficile à lire!
- Un code court propore et rapide comme on l'aime.



💡OK mais en faite je viens de réalisé que le bute de l'exercice n'est peut être pas de crée un nouveau tableau donc autre possibilité de réponse:

initialArray.splice(0, initialArray.length, "one", initialArray[2][1], initialArray[4][0], "four");

console.log(initialArray);


1. La partie splice(0, initialArray.length, ...)
==> Sa permet de remplacer le contenu du tableau à partir de l'index 0.

2. initialArray.length
==> Permet de vider le tableau, car length indique combien d'éléments on vas supprimer. Dans ce cas c'est tout les indexs du tableau.

🔎(mais genre imagine je veux juste supprimer deux éléments et les remplacer à partir d'un tableau alors au lieu de mettre length je fait initialArray.splice(1, 2, "A", "B"); )
Pour la structure ca donne : initialArray.splice(indexDépart, nombreASupprimer, ...élémentsÀAjouter)

3. "one" et "four" sont des valeurs littérales, donc on peut les écrire directement entre guillemets dans le tableau.

4. "two" et "three" sont extraits de initialArray[2][1] et initialArray[4][0].

🔎(Pourquoi on a pas utiliser push ?

en faite, Si on utilisait push(), il faudrait d'abord vider le tableau avec une autre méthode comme par ex(initialArray.length = 0).

puis utiliser push() (initialArray.push("one",...)) pour ajouter chaque nouvel élément un par un. Ce serait moins efficace et plus long. enfin ici se serait en 2lignes au lieu de 1)


## 21b.exercices.md 

### ex5
Le mot return arrête la fonction, c'est pourquoi les lignes après return 4; ne fonctionne pas. Si on souhaites que les autres console.log "Goodbye" et "World" soient également affichés, il faut déplacer le return à la fin de la fonction.







## 01.ALGOS-série1 

### 05.exo.md
- a et b sont des objects qui represante les prix de deux boissons dans le tableau drinks.

- Les return -1, 1, 0 indiquer si un élément doit venir avant ou après un autre élément.

- La méthode sort() utilise les valeurs retournées par la function pour faire une  coparaison qui aide a déterminer l'ordre des éléments.
nbr(-) = si a doit apparaître avant b.
nbr(+) = si a doit apparaître après b.
0 = si les éléments sont égaux.

- drink.sort(comparePrices);

vas comparer {name: "lemonade", price: 10} et {name: "lime", price: 10} et vas retourner 0 car les prix sont égaux. ils ne changent pas de place.

compare {name: "coke", price: 8} avec {name: "vodka", price: 17} retourne -1 pcq 8 < 17. "Water" sera avant "Coke".

on aurait pu utilisé localCompare() mais ca c'est pour les chaînes de caractères. 





