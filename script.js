console.log('JS ok');

/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

--------- STEP ---------
    1. vengono visualizzati 5 numeri random per 30 sec
    2. dopo 30 sec i numeri scompaiono
    3. prompt per 5 voolte, l'utente deve inserire numeri uno alla volta
    4. controllo tra numeri visualizzati e numeri inseriti
    5. console.log('numero di numeri indovinati')
       console.log('quali numeri indovinati')
*/


// Funzione che genera numeri a caso in un range 
function randomNumber(min,max){
    const range = max - min + 1;
    const randomNumber = Math.floor(Math.random()*range + min);
    return randomNumber;
}

// Creo un array vuoto
const arrayNumDaRicordare = [];

// Creeo funzione che riempia array con 5 numeri casuali
function riempieArray(nVolte){
    for(let i=0; i<nVolte; i++){
        arrayNumDaRicordare.push(randomNumber(1,10));
    }
    console.log(arrayNumDaRicordare);
}

riempieArray(5);

//let numRandom = randomNumber(1, 100);
//console.log(numRandom);