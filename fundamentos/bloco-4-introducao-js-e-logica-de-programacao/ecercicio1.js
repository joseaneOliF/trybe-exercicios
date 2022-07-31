//const n = "9" ;
//
//let resultado = 100;
//for (let index = 0; index <= n; index += 1) {
//  resultado -= index;
//};
//console.log(resultado); NÃO ENTENDI

//let resultado = 0
//for( let index = 1; index <= 100; index =+ 1){
//    resultado += index
//}
//console.log(resultado);


//Agora a prática
//Aprofunde seus conhecimentos
//Leia atentamente os enunciados e faça o que se pede!
//Recomendamos que você utilize o debugger ou o console.log() durante a realização dos exercícios, desse modo será mais fácil acompanhar o comportamento do código e entender o que ocorre em cada uma das linhas. Para saber mais sobre como utilizar o debugger, acesse nosso conteúdo sobre isso.


//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

//O fatorial é representado pelo sinal !
//4! = 4 x 3 x 2 x 1 = 24
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

//let fatorial = 1;
//
//for (let index = 10; index > 0; index -= 1) {
//  fatorial *= index;
//}
//
//console.log(fatorial);


//Exercício 2
//Enunciado
//2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

//let word = 'tryber';
//let reverseWord = '';
//
//for (let index = 0; index < word.length; index += 1) {
//  reverseWord += word[word.length - 1 - index];
//}
//
//console.log(reverseWord);

// Outra solução possível:

//let word = 'tryber';
//let reverseWord = '';
//
//reverseWord = word.split('').reverse().join('');
//
//console.log(reverseWord);


//3- Considere o array de strings abaixo:

//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
//Solução:

//let array = ['java', 'javascript', 'python', 'html', 'css'];
//
//let biggestWord = array[0];
//let smallestWord = array[0];
//
//for (let index = 0; index < array.length; index += 1) {
//  if (array[index].length > biggestWord.length) {
//    biggestWord = array[index];
//  }
//}
//
//for (let index = 0; index < array.length; index += 1) {
//  if (array[index].length < smallestWord.length) {
//    smallestWord = array[index];
//  }
//}
//
//console.log(biggestWord);
//console.log(smallestWord);


//4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
//Solução:  NÃO ENTENDI

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);


//BÔNUS

//Exercício 1

//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
// n = 5

//*****
//*****
//*****
//*****
//*****

//let n = 5;
//let symbol = '*';
//let inputLine = '';
//
//for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//  inputLine = inputLine + symbol;
//};
//for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//  console.log(inputLine);
//};


//Exercício 2

//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

//n = 5
//
//*
//**
//***
//****
//*****

//Solução:


//let size = 5;
//let symbol = '*';
//let inputLine = '';
//
//for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
//  console.log(inputLine);
//  inputLine = inputLine + symbol;
//};


//Exercício 3
//Agora inverta o lado do triângulo. Por exemplo:

//n = 5
//
//    *
//   **
//  ***
// ****
//*****

//solução:


//let n = 5;
//let symbol = '*';
//let inputLine = '';
//let inputPosition = n - 1;
//
//for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
//    if (columnIndex < inputPosition) {
//      inputLine = inputLine + ' ';
//    } else {
//      inputLine = inputLine + symbol;
//    }
//  }
//  console.log(inputLine);
//  inputLine = '';
//  inputPosition -= 1;
//};


//Exercício 4 

// Por fim, faça uma pirâmide com n asteriscos de base:
//n = 5
//
//  *
// ***
//*****


//let n = 5;
//let symbol = '*';
//let inputLine = '';
//
//let midOfMatrix = (n + 1) / 2; //A posição central é sempre (n + 1) / 2  
//let controlLeft = midOfMatrix;
//let controlRight = midOfMatrix;
//
//for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//    if (columnIndex > controlLeft && columnIndex < controlRight) {
//      inputLine = inputLine + symbol;
//    } else {
//      inputLine = inputLine + ' ';
//    }
//  }
//  console.log(inputLine);
//  inputLine = '';
//  controlRight += 1;
//  controlLeft -= 1
//};

//Exercício 5
//Faça uma pirâmide com n asteriscos de base, que seja vazia no meio:
//Solução:

//let n = 7;
//let middle = (n + 1) / 2;
//let controlLeft = middle;
//let controlRight = middle;
//let symbol = '*';
//for (let line = 1; line <= middle; line += 1) {
//  let outputLine = '';
//  for (let col = 1; col <= n; col += 1) {
//    if (col == controlLeft || col == controlRight || line == middle) {
//      outputLine += symbol;
//    } else {
//      outputLine += ' ';
//    }
//  }
//  controlLeft -= 1;
//  controlRight += 1;
//  console.log(outputLine);
//}


//Exercício 6
//Faça um programa que diz se um número definido numa variável é primo ou não.
//Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.


//let divisors = 1;
//let numberToCheck = 31;
//
//for (let number = 2; number <= numberToCheck; number += 1) {
//  if (numberToCheck % number === 0) divisors += 1;
//}
//
//if (divisors === 2) console.log(numberToCheck + ' é primo');
//else console.log(numberToCheck + ' não é primo');

