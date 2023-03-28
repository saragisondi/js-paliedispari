
// const wordUser = prompt('inserisci una parola palindroma');

//chiedo all'utente di inserire una parola palindroma
const word = prompt('inserisci una parola');
const wordReverse = wordArr(word);

//Creo una condizione per cui verifichiamo che la parola sia uguale alla parola al contrario
if (word === wordReverse) {
  console.log('la parola è palindroma');
} else {
  console.log('la parola non è palindroma');
}

//Faccio una funzione
function wordArr(str) {
  let strReverse = str.split('').reverse().join('');

  return strReverse;
}