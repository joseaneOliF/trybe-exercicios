// Exercício 8
// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.

// const a = 5;
// const b = 8;
// const c = 9;
// 
// if( a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
//     console.log('true')
// } else {
//     console.log('false');
// }

//GABARITO


const a = 1;
const b = 3;
const c = 5;

let isEven = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
};
console.log(isEven);