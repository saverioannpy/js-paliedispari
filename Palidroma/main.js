'use strict';

/******** Funzioni *******/

function palindroma(parolaA){
    const parolaB = []; //dichiaro un array in cui memorizzare l'input utente invertito
    let i = parolaA.length-1; // il mio array avrà questo puntato inizializzato all'ultimo carattere della parola inserita dall'utente; 
        for(let j = 0 ; j <= parolaA.length-1 ; j++){ // il  ciclo serve invece per scorre e riempire in maniera lineare l'array che conterrà la parola invertita
            parolaB[j] = parolaA[i]; 
            console.log(parolaB[j]);
            i--; //inserisco l'ultimo carattere della parola data dall'utente alla posizione 0 del mio array e vado avanti così incrementando i e decrementando j
        }
    console.log("La parola inserita dall'utente è: " + text);
    console.log("La parola se viene invertita diventa:" + parolaB); 
    return(parolaB);
}


/******** Main *******/

let parolaUtente = prompt("Inserisci una parola");
console.log("Parola inserita dall'utente è: " + parolaUtente);
palindroma(parolaUtente);


