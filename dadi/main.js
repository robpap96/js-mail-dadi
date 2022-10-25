/*----------------------------

            DADI

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
-----------------------------*/
"use strict";

//genero due numeri da 1 a 6 randomici 
const numGiocatore1 = Math.round(Math.random() * 6+1);
const numCPU = Math.round(Math.random() * 6+1);
//mostro i numeri sulla console
console.log(` ${numGiocatore1} ${numCPU} `);
//stabilisco il vincitore con un ciclo
for (let i=0; i<6+1; i++) {
    if(numGiocatore1 > numCPU) {
        console.log("C Cul hai vinto!!! Vince Giocatore 1");
    } else if(numGiocatore1 < numCPU) {
        console.log("Sfig hai perso!!! Vince la CPU");
        } else {
            console.log("Pareggio!!!");
        }
}

