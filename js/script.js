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


document.getElementById("Gioca!").addEventListener("click", function() {
    // Ottiengo il valore selezionato dall'utente nella tendina della scelta
    let userChoice = document.getElementById("scelta-utente").value;

    // Ottieni il valore selezionato dall'utente nella tendina del numero
    let userNumber = document.getElementById("scelta-numero").value;

    // Parte di codice usata con il Prompt 

    // // Verifica se il numero inserito è valido (tra 1 e 5)
    // if (userNumber < 1 || userNumber > 5) {
    //     alert("Per favore inserisci un numero tra 1 e 5");
    //     return; // Esci dalla funzione se il numero non è valido
    // }

    // Generiamo un numero casuale da 1 a 5
    function numRandom() {
        const number = Math.floor(Math.random() * 5) + 1;
        console.log(number);
        return number; // Restituisce il numero generato
    }

    // Generiamo una variabile che ci permette di usare il numero random generato dalla funzione numRandom
    let numGenerated = numRandom();
    console.log(numGenerated);

    // Sommiamo i due numeri e stabiliamo se la somma è pari o dispari
    let somma = parseInt(numGenerated) + parseInt(userNumber);
    console.log(somma);

    let risultato;

    if (somma % 2 === 0) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }

    console.log(risultato);

    // Dichiariamo chi ha vinto
    if (userChoice === risultato) {
        alert("Congratulazioni hai vinto!");
    } else {
        alert("Mi dispiace, ha vinto il pc!");
    }
});










