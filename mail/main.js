/*----------------------------

            MAIL

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
-----------------------------*/

//creo array email
const mails = [ "giuseppe@gmail.com", "seppo@gmail.com", "samuele@gmail.com", "roberto@gmail.com", "garibaldi@gmail.com", "fabiana@gmail.com" ];
//chiedo mail all'utente
const mailUtente =  prompt("Inserisci la tua mail");
for (let i = 0; i<mails.length; i++) {
    if( mails[i] === mailUtente) {
        console.log("OK!!! Accesso consentito!");
        break;
    } else if (i == mails.length-1){
        console.log("NO!!! Accesso negato!");
    } 
}