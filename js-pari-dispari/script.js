// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). Dichiariamo chi ha vinto.

// Facciamo scegliere all'utente pari o dispari e poi un numero da 1 a 5. Creiamo due prompt.
const userChoice = prompt("Pari o dispari?");
const userNumber = Number(prompt("Scegli un numero da 1 a 5."));
console.log(`L'utente ha scelto il numero: ${userNumber}`);

// if (1 >= userNumber <= 5) {
//     console.log("Continuiamo...");

// } else {
//     alert("Attenzione! Il numero da te scelto deve essere compreso tra 1 e 5.")
// }

// Generiamo un numero random per il computer usando una funzione.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const computerNumber = getRandomNumber(1, 5);
console.log(`Il numero generato per il computer è: ${computerNumber}`);

// Sommiamo i due numeri.
const somma = userNumber + computerNumber;
console.log(`La somma dei numeri è: ${somma}`);

// Creiamo una funzione per stabilire se la scelta dell'utente sia stata pari o dispari.
function userPariDispari(choice) {
    let = pari_dispari = "";
    if (choice === "Pari" || choice === "pari") {
        pari_dispari = "pari";
    } else if (choice === "Dispari" || choice === "dispari") {
        pari_dispari = "dispari"
    }
    return pari_dispari;
}
console.log(`L'utente ha scelto: ${userPariDispari(userChoice)}`);

// Stabiliamo se la somma è pari o dispari tramite un'altra funzione.
function sommaPariDispari(numb) {
    let pari_dispari = numb % 2 === 0;
    if (pari_dispari = true) {
        pari_dispari = "pari";
    } else {
        pari_dispari = "dispari";
    }
    return pari_dispari;
}
console.log(`La somma è: ${sommaPariDispari(somma)}`); // fnc


//Dichiariamo chi ha vinto!
if ((userPariDispari(userChoice) == "pari") && (sommaPariDispari(somma) == "pari")) {
    console.log("Ha vinto l'utente.");
    alert("Complimenti! Hai vinto!");
} else if ((userPariDispari(userChoice) == "dispari") && (sommaPariDispari(somma) == "dispari")) {
    console.log("Ha vinto l'utente.");
    alert("Complimenti! Hai vinto!");
} else {
    console.log("Ha vinto il computer.");
    alert("Peccato! Questa volta ho vinto io!");
}

