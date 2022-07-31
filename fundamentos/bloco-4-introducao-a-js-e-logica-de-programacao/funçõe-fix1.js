// Funções
// Para esses exercícios, você deve refazer os exercícios de 1 a 5 do dia 4.1.
// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
//   * Adição (a + b)
//   * Subtração (a - b)
//   * Multiplicação (a * b)
//   * Divisão (a / b)
//   * Módulo (a % b)

//function soma(a, b){
//    return a + b
//}
//console.log(soma(5, 8));

//function sub( a, b){
//    return a - b
//}
//console.log(sub(5, 8));
//
//function mult(a, b){
//    return a * b 
//}
//console.log(mult(5, 8));
//
//function divi(a, b){
//    return a / b
//}
//console.log(divi(5, 8));
//
//function mod(a, b){
//    return a % b
//}
//console.log(8, 5);


//2 - Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

//function maiorNum(primeiroNum, segundoNum){
//    if (primeiroNum > segundoNum){
//        console.log("primeiro número é maior: " + primeiroNum)
//    } else {
//        console.log("segundo número é maior: " + segundoNum);
//    }
//    return maiorNum
//}
//maiorNum(42, 45)

// GABARITO

//function maiorNum(primeiroNum, segundoNum) {
//    if (primeiroNum > segundoNum) {
//      return primeiroNum + ' é maior que ' + segundoNum;
//    } else {
//      return segundoNum + ' é maior que ' + primeiroNum;
//    }
//  }
//  console.log(maiorNum(42, 45));
//
//  3 - Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

//function maiorNum(a, b, c){
//    if (a > b && a > c){
//        return a + " é o maior dos 3 números";
//    } else if(b > a && b > c){
//        return b + " é o maior dos 3 números";
//    }else {
//        return c + " é o maior dos 3 números";
//    }
//}
//console.log(maiorNum(17, 45, 42))

//GABARITO

//function maiorDeTres(primeiroNum, segundoNum, terceiroNum) {
//    if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
//      return 'O maior número é: ' + primeiroNum;
//    } else if (segundoNum > primeiroNum && segundoNum > terceiroNum) {
//      return 'O maior número é: ' + segundoNum;
//    } else {
//      return 'O maior número é: ' + terceiroNum;
//    }
//  }
//  console.log(maiorDeTres(17, 42, 45));
//
//  4 - Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".

//function posNeg(number){
//    if(number > 0){
//        return 'positive';
//    }else if(number < 0){
//        return 'negative';
//    }else {
//        return 'zero'
//    }
//    
//}
//console.log(posNeg(0));

// 5 - Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

function triangleAnglesValidate(angleA, angleB, angleC) {
    let sumOfAngles = angleA + angleB + angleC;
  
    let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;
  
    if (allAnglesArePositives) {
      if (sumOfAngles === 180) {
        return true;
      } else {
        return false;
      }
    } else {
      return 'Erro: ângulo inválido';
    }
  }
  console.log(triangleAnglesValidate(65, 15,));