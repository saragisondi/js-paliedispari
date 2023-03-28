
// const wordUser = prompt('inserisci una parola palindroma');

//chiedo all'utente di inserire una parola palindroma
const word = 'annab';
//Suddivido la parola
let wordArr = word.split('')
console.log(wordArr);
//Utilizzo il metodo Reverse per invertire l'ordine degli elementi
let wordSplit = wordArr.reverse();
//riunisco le lettere per ottenere una nuova stringa
let wordArr2 = wordSplit.join('');