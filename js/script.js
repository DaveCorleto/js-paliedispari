// Palindroma


// Creare una funzione per capire se la parola inserita è palindroma

// Chiedere all’utente di inserire una parola

let word = prompt("inserisci una parola e ti dirò se è Palindroma");

// Creo una versione con tutte minuscole per evitare problemi 

let wordCleaned = word.toLowerCase('');

console.log (wordCleaned)

// Creo una versione reverse della parola inserita 

let wordReverse = wordCleaned.split('').reverse('').join('');

console.log (wordReverse)


if (word === wordReverse){
    alert ("La parola inserita è un palindromo")
}
else {
    alert ("La parola che hai inserito NON è un palindromo")
}

