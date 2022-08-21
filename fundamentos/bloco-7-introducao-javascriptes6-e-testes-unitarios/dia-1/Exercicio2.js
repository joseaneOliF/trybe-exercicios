//solução 1

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// 
// const sortOddsAndEvens = (array) => {
// for(index = 1; index < array.length; index += 1){
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1){
//         if(array[index] < array[secondIndex]){
//             let position = array[index];
//             array[index] = array[secondIndex];
//             array[secondIndex] = position; // Veja que ao fazer a comparação entre os _index_ em sequência, os elementos vão sendo ordenados de forma crescente
//         }
//     }
// }
// return array
// };
// 
// console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!".`); // será necessário alterar essa linha 😉


// Solução 2

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// 
// const sortOddsAndEvens = () => {
// oddsAndEvens[0] = 2;
// oddsAndEvens[1] = 3;
// oddsAndEvens[2] = 4;
// oddsAndEvens[3] = 7;
// oddsAndEvens[4] = 10;
// oddsAndEvens[5] = 13;
//  return oddsAndEvens
// 
// };
// 
// const sortedArray = sortOddsAndEvens();
// 
// console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!".`); // será necessário alterar essa linha 😉

// BÔNUS array.sort()

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// 
// const sortArrayBonus = array => {
//     const sortOddsAndEvens = array.sort((a, b) => a - b);
//     return sortOddsAndEvens;
// }
// const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
// console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!".`);

//array.sort com sort em uma linha.

//const oddsAndEvens = [13, 3, 4, 10, 7, 2];
//
//console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => b - a)} se encontram ordenados de forma decrescente!`);