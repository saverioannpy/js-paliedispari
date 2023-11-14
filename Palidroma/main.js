'use strict';

/******** Funzioni *******/

function palindroma(parolaA){
    let parolaB = ''; 
    let i = parolaA.length-1; // la mia funzione avrà due puntatori, i inizializzato all'ultimo carattere della parola inserita dall'utente e j inizializzato a 0 che incrementerà con un ciclo for
        for(let j = 0 ; j <= parolaA.length-1 ; j++){ // il  ciclo serve invece per scorre e riempire in maniera lineare la variabile che conterrà la parola invertita
            parolaB += parolaA[i]; //concateno al'interno della mia variabile ogni singolo carattere estrapolato a ritroso dalla parola inserita dall'utente
            console.log(parolaB[j]);
            i--; //inserisco l'ultimo carattere della parola data dall'utente alla posizione 0 del mio array e vado avanti così incrementando i e decrementando j
        }
    console.log("La parola inserita dall'utente è: " + parolaA);
    console.log("La parola se viene invertita diventa: " + parolaB); 
    if(parolaA === parolaB){
        alert("La parola inserita è palindroma");
        console.log("La parola inserita è palindroma");
    }else{
        alert("La parola inserita non è palindroma");
        console.log("La parola inserita NON è palindroma");
    }
}


/******** Main *******/

let parolaUtente = prompt("Inserisci una parola");
palindroma(parolaUtente);


