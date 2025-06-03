// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma.

// Chiedo all'utente di inserire una parola qualsiasi.
const word = prompt("Scrivi una parola");
const userWord = word.toLowerCase();
console.log(userWord);

//Creo la variabile reversedWord 
let reversedWord = "";

// Scrivo la fuzione che mi permette di capovolgere la parola fornita dall'utente, scritta al contrario
function reverseWord(word) {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        let reverseLetter = word[i];
        reversedWord = reversedWord + reverseLetter;
    }
    return reversedWord;
}

reversedWord = reverseWord(userWord);
console.log(reversedWord);

// Scivo delle condizioni che mi permetteranno di stabilire se la parola fornita dall'utente è palindroma o meno.
if (reversedWord === userWord) {
    alert("La parola è palindroma.")
} else {
    alert("La parola non è palindroma.")
}