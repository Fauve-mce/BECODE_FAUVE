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