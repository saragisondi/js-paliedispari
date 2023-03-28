//chiedo all'utente se pari o dispari
const EvenOrOdd = prompt('pari o dispari?')
console.log(EvenOrOdd)
//chiedo all'utente il numero
  const numberUser = parseInt(prompt('inserisci un numero da 1 a 5'));

//verifico che il numero sia compreso tra 1 e 5
  let messageNumber="";
  if (numberUser > 0 && numberUser <= 5)  {
    messageNumber = numberUser +" "+ ':numero valido'; 
  }else{
    messageNumber = numberUser +" "+ ':numero non valido';
  }console.log(messageNumber)



  //genero un numero random per il computer
  const numberPc = getNumberRandom(1,5);
  console.log( numberPc)

  function getNumberRandom( min, max ) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    return randomNumber;

  }

//sommo i numeri ottenuti
  const sum = (numberPc , numberUser);
  console.log('somma' , sum)

  function sumEvenOrOdd(even , odd){
    const result = !(sum % 2);

    return result;
  }

