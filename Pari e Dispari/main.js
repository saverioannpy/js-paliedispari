'use strict';

/*** Funzioni ***/

function cpuNumberGenerator(){
    const cpuNumber = Math.floor(Math.random() * 4) + 1; //genero casualmente un numero tra 1 e 5
    return cpuNumber;
}


/*** Main ***/

let userChoice = 'pari'; //la variabile che conterrà la scelta viene inizializzata a "pari".
let userNumber = 0;
do{
    userChoice = prompt("Cosa scegli, pari o dispari?"); //L'utente effettua una scelta tra pari e dispari
    userChoice = userChoice.toLowerCase(); //per evitare errori di verifica sull'input decido di convertirmi l'input in minuscolo
    console.log("userChoice " + userChoice);
    if( (userChoice === "pari") || (userChoice === "dispari") ){ //controllo che l'utente abbia inserito un valore corretto
        alert("Hai scelto: " + userChoice);
        console.log("Scelta eseguita correttamente: " + userChoice);
        do{
            userNumber = Number( prompt("Scegli un numero compraso tra 1 e 5:") ); //viene chiesto all'utente di inserire un numero compreso tra 1 e 5
            console.log("userNumber: " + userNumber);
            if( ( userNumber >= 1 ) && ( userNumber <= 5 ) ){ //se il numero scelto è compreso fra 1 e 5 allora il gioco continua
                alert("Hai scelto " + userNumber);
                console.log("Scelta eseguita correttamente: " + userNumber);
                const cpuNumber = cpuNumberGenerator();//richiamo la funzione che genera un numero casuale per la cpu avversaria
                alert("La CPU ha scelto " + cpuNumber);
                console.log("La CPU ha scelto: " + cpuNumber);
            }else{
                alert("Errore: Hai inserito un valore sbalgiato, scegli un numero compreso tra 1 e 5. Riprova.")
                console.log("Errore: Hai inserito un valore sbalgiato, scegli un numero compreso tra 1 e 5. Riprova.")
            }
        }while( ( userNumber < 1 ) || ( userNumber > 5 ) || ( isNaN(userNumber) )) //il programma chiederà all'utente di scegliere un numero fin quando esso non sarà tra 1 e 5
    }else{
        alert("Errore: Forse non ho capito bene la tua scelta, scegli tra pari o dispari. Riprova.")
        console.log("Errore: Forse non ho capito bene la tua scelta, scegli tra pari o dispari. Riprova.")
    }
}while( (userChoice !== "pari") && (userChoice !== "dispari") ) //se l'utente inserisce un valora errato risalità a monte e ripeterà l'input