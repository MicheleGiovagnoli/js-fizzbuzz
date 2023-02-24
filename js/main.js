//Scrivi un programma che stampi in console i numeri da 1 a 100,
//ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const domContainer = document.querySelector('.container');

for (let i = 1; i < 100; i++) {
    const domBlocco = document.createElement('div');
    domBlocco.classList.add('blocco');
    domBlocco.append(i);
    domContainer.append(domBlocco);
}