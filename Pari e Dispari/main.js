'use strict';

/*** Funzioni ***/

function cpuNumberGenerator(){ //funzione per la generazione di un numero casuale giocato dalla cpu
    const cpuNumber = Math.floor(Math.random() * 4) + 1; //genero casualmente un numero tra 1 e 5
    return cpuNumber; //restituisco al main il numero generato
}

function gameResult(sumNumbers, userChoice){ //funzione che decreta il vincitore della partita
    if( ( sumNumbers % 2 ) === 0 ){ //controllo se il modulo della somma dei valori in gioco è 0
        if(userChoice === "pari"){
            alert("Avevi scelto pari, hai vinto!"); //la somma dei numeri è pari e l'utente ha scommesso su pari.
            console.log("Il giocatore vince");
            return true;
        }else{
            alert("Avevi scelto dispari, Hai perso!") //la somma dei numeri è pari ma l'utente ha scommesso su dispari.
            console.log("la CPU vince");
            return false;
        }
    }else{
        if(userChoice === "dispari"){
            alert("Avevi scelto dispari, hai vinto!"); //la somma dei numero è dispari e l'utente ha scelto dispari.
            console.log("Il giocatore vince");
            return true;
        }else{
            alert("Avevi scelto pari, hai perso!"); //la domma dei numeri è disparmi ma l'utente ha scelto pari.
            console.log("La CPU vince");
            return false;
        }
    }  
    
}

/*** Main ***/

let userChoice = 'pari'; //la variabile che conterrà la scelta viene inizializzata a "pari".
let userNumber = 0; //il numero scelto dall'utente viene inizializzato a 0
let userGame = "si";
let userPoints = 0; //contatore delle partite vinte dal giocatore 
let cpuPoints = 0; //contatore delle partite vinte dalla cpu


do{
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
                    alert("Hai scelto: " + userNumber);
                    console.log("Scelta eseguita correttamente: " + userNumber);
                    const cpuNumber = cpuNumberGenerator();//richiamo la funzione che genera un numero casuale per la cpu avversaria
                    alert("La CPU ha scelto: " + cpuNumber);
                    console.log("La CPU ha scelto: " + cpuNumber);
                    const sumNumbers = userNumber + cpuNumber; //sommo i due numeri scelti dai giocatori
                    alert("La somma dei numeri scelti dai giocatori è: " + sumNumbers);
                    console.log("La somma dei numeri scelti dai giocatori è :" + sumNumbers);
                    if (gameResult(sumNumbers,userChoice)){ //richiamo la funzione per verificare chi è il vincitore della partita
                        userPoints++; //se la funzione restituisce true incrementiamo il punteggio del giocatore
                    }else{
                        cpuPoints++; //se la funzione restituisce false incrementiamo il punteggio della CPU
                    }
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
    do{
        userGame = prompt("Vuoi ancora giocare? (si / no)"); //domanda che permette all'utente di giocare un'altra partia se ne ha voglia digitando "si"
        userGame = userGame.toLowerCase();
        if(userGame === "no" ){ //se l'utente digita "no" il programma si arresta e gli vengono mostrati i punteggi finali
            alert("Grazie per aver giocato\nTuo punteggio: " + userPoints + "\nPunteggio CPU: " + cpuPoints);
            console.log("Il gioco termina. Grazie per aver giocato.")
        }else if(userGame !== "si" && userGame !=="no"){ //se l'utente inserisce un input errato gli verrà richiesta l'immissione.
            alert("Non ho capito bene la tua scelta, vuoi continuare a giocare? (si / no)")
            console.log("ERRORE: Non ho capito bene la tua scelta, vuoi continuare a giocare? (si / no)");
        }
    }while(userGame !== "si" && userGame !=="no")
}while(userGame === "si")