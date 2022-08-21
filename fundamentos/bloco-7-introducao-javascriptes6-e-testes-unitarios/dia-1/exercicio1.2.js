// const factorial = (number) => {
//     let result = 1;
// 
//     for (let index = 2; index <= number; index += 1) {
//         result *= index;
//     }
//     return result;
// }
// const print = factorial(4);
// console.log(`Esse é o fatorial ${print}`);

// Recursividade

//const factorial = number => {
//    if(number > 1){
//        return number * factorial(number -1);
//    }else {
//        return 1
//    }
//}
//const print = factorial(5)
//console.log(`Esse é o fatorial ${print}`);

// Operador ternário

//const factorial = number => {
//    return number > 1 ? number * factorial(number -1) : 1;
//}
//const print = factorial(5)
//console.log(`Esse é o fatorial ${print}`);

// fazer retorno implícito:

const factorial = number => number > 1 ? number * factorial(number -1) : 1;

const print = factorial(5)
console.log(`Esse é o fatorial ${print}`);