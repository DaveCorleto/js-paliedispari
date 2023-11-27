// Palindroma


// Creare una funzione per capire se la parola inserita è palindroma

// Chiedere all’utente di inserire una parola

// let word = prompt("inserisci una parola e ti dirò se è Palindroma");

// // Creo una versione con tutte minuscole per evitare problemi 

// let wordCleaned = word.toLowerCase('');

// console.log (wordCleaned)

// // Creo una versione reverse della parola inserita 

// let wordReverse = wordCleaned.split('').reverse('').join('');

// console.log (wordReverse)


// if (word === wordReverse){
//     alert ("La parola inserita è un palindromo")
// }
// else {
//     alert ("La parola che hai inserito NON è un palindromo")
// }

// Pari e Dispari

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

let userChoice = prompt ("Inserisci la tua scelta: Pari o Dispari?");
let userNumber = parseInt (prompt("Inserisci un numero da 1 a 5"));

if ((userNumber < 1) || (userNumber>5)) {
    alert ("per favore inserisci un numero tra 1 e 5");
}
    // Generiamo un numero da 1 a 5 

function numRandom() {
    const number = Math.floor(Math.random() * 5) + 1;
    console.log(number)
    return number; // Restituisce il numero generato
}

// Genero una variabile che mi permette di usare il numero random generato dalla funzione numRandom 

let numGenerated = numRandom();

console.log(numGenerated);

// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 

let somma = numGenerated + userNumber;

console.log (somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 

let risultato; 

if (somma % 2 === 0) {
    risultato = "Pari"
}
else {
    risultato = "Dispari"
}

console.log(risultato)

// Dichiariamo chi ha vinto. 












