// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). Dichiariamo chi ha vinto.

// Facciamo scegliere all'utente pari o dispari e poi un numero da 1 a 5. Creiamo due prompt.
let userChoice = prompt("Pari o dispari?");
console.log(`L'utente ha scelto: ${userChoice}`);
const userNumber = Number(prompt("Scegli un numero da 1 a 5."));
console.log(`L'utente ha scelto il numero: ${userNumber}`);

if (1 >= userNumber <= 5) {
    console.log("Continuiamo...");

} else {
    alert("Attenzione! Il numero da te scelto deve essere compreso tra 1 e 5.")
}

// Generiamo un numero random per il computer usando una funzione.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const computerNumber = getRandomNumber(1, 5);
console.log(`Il numero generato per il computer è: ${computerNumber}`);

// Sommiamo i due numeri.
const somma = userNumber + computerNumber;
console.log(`La somma dei numeri è: ${somma}`);

// Stabiliamo se la somma è pari o dispari tramite una funzione.
function pariDispari(numb) {
    if (numb % 2 === 0) {
        console.log("La somma dei numeri è: pari");

    } else {
        console.log("La somma dei numeri è: dispari");

    }
    return pariDispari;
}
console.log(pariDispari(somma));

//Dichiariamo chi ha vinto!
if ((userChoice = "Pari" || "pari") && (somma % 2 === 0)) {
    // alert("Complimenti! Hai vinto!");
    console.log("Ha vinto l'utente.");

}
else if ((userChoice = "Dispari" || "dispari") && (somma % 2 != 0)) {
    // alert("Complimenti! Hai vinto!");
    console.log("Ha vinto l'utente.");
}
else {
    // alert("Peccato! Questa volta ho vinto io!");
    console.log("Ha vinto il computer.");
}

