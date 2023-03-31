/*
Consegna:
    - L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
    - Ogni cella ha un numero progressivo, da 1 a 100.
    - Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    - Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus :
    - Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
        - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
        - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
        - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

Bonus extra :
    - Aggiungere la versione dark mode
*/

// Creo una variabile per selezionare il div #griglia
const griglia = document.querySelector( `#griglia`);

// Funzione per creare elemento div="box"
function creoDiv( elemento, classe, testo ) {

    // Creo l'elemento div
    const div = document.createElement(elemento);

    // Aggiungo del testo
    div.innerText = testo
    
    // Aggiungo a div la classe .box
    div.classList.add(classe);

    return div;
}


// Creo un ciclo per generare una serie sequenziale di numeri da 1 a 100
for ( let i = 1; i <= 100; i++ ) {
    
    let scatola = creoDiv( `div`, `box`, i )

    scatola.addEventListener( `click`, function () {

        this.classList.add("luca");
        console.log(`luca`)
    } )

    griglia.append(scatola)
}
