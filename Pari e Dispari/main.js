'use strict';

let userChoice = "pari"; //la variabile che conterrà la scelta viene inizializzata a "pari" per poter entrare nel nostro ciclo do
do{
    userChoice = prompt("Cosa giochi? Pari o Dispari?"); //L'utente effettua una scelta tra pari e dispari
    userChoice = userChoice.toLowerCase(); //per evitare errori di verifica sull'input decido di convertirmi l'input in minuscolo
    console.log("userChoice " + userChoice);
    if( (userChoice === "pari") || (userChoice === "dispari") ){ //controllo che l'utente abbia inserito un valore corretto
        console.log("sono qui");
    }else{
        alert("Errore: Forse non ho capito bene la tua scelta, scegli tra pari o dispari. Riprova.")
        console.log("Errore: Forse non ho capito bene la tua scelta, scegli tra pari o dispari. Riprova.")
    }
}while( (userChoice !== "pari") && (userChoice !== "dispari") ) //se l'utente inserisce un valora errato risalità a monte e ripeterà l'input