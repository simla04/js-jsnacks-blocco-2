/*
Snack1*
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo ( del numero inserito dall'utente: esempio se il numero dell'utente è 2, il numero successivo è 3  ).
*/ 

// const numeroUtente = parseInt(prompt('inserisci un numero'));
// //console.log(numeroUtente)

// if( numeroUtente % 2 == 0){
//     console.log(numeroUtente);
// } else{
//     console.log(numeroUtente + 1);
// }


/*
Snack2*
Generatore di “nomi cognomi” casuali del grande gatsby:
Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati, dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale.
*/ 

// // array1
// const nomi = ['Luca', 'Edoardo', 'Matteo', 'Leo', 'Marcus' ];
// // array2
// const cognomi = ['Rossi', 'Sancino', 'Bianchi', 'Jade'];

// const nominativiCompleti = [];



// //stampiamo in console il risultato per vedere se viene correto lo snack
// console.log( `l'unione randomica tra un nome ed un cognome della lista é: ${nomi[nomeRandom]} ${cognomi[cognomeRandom]}`);


//per realizzare tutte e 16 le combinazioni possibili senza che ci siano le stesse ripetizioni di combinazione, range dinamico tra le combinazioni randomiche possibili per il numero degli indici disponibili (=lenght). i deve partire da zero perchè gli indici partono da 0.

// //al posto di 16 era lo stesso mettere cognomi.length
// for ( let ì=0; i < 16; i++ ){

// // length= numeri degli elemnti dell'array;la posizione di ognuno é rappresentato da un numero di indice, partendo però da 0 (luca=0, edoardo=1, matteo=2,..). Bisogna lavoare con il numero degli indici per random
// let nomeRandom = Math.floor(Math.random() * nomi.length);
// let cognomeRandom = Math.floor(Math.random() * cognomi.length);


// //inserire i dati nell'array nominativiCompleti: vuoto finora
// nominativiCompleti.push{ `${nomi[nomeRandom]} ${cognomi[cognomeRandom]}`};



// }
// console.log(nominativiCompleti)


/*
Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari
*/ 


// 10 posizioni. considero le posizioni dispari(% 2 !== 0)
// let number = [8,56,8,9,4,2,7,87,45,90];


// //sum = variabile soldatino
// let sum = 0;

// for (let i = 0; i< number.length; i++){
//     //posizione dispari
//     if( i % 2 !== 0){

//         // estrazione del indice 
//         sum = sum + number[i];
//     }

// }
// console.log(sum);