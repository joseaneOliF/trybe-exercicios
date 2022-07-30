// Agora a prática
// Nos exercícios de hoje, você vai fazer quinze pequenos programas. Todos trabalham a lógica condicional (if/else e switch/case), operadores aritméticos (+, -, *, /, %) e operadores lógicos (>, <, &&, ||). Para que consiga executar seus códigos recomendamos que utilize a extensão Code Runner, você pode ver mais sobre ela no conteúdo que fizemos sobre o uso do VS Code.

// 1- Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
//   -Adição (a + b)
//   -Subtração (a - b)
//   -Multiplicação (a * b)
//   -Divisão (a / b)
//   -Módulo (a % b)
// *Dica: Neste link você encontra mais detalhes sobre operadores matemáticos 😉

//Meu exercício:
//const a = 8
//const b = 15

// let Multiplicação = a * b;
// let soma = a + b;
// let subtracao = a - b;
// let subtraia = b - a;
// let divisao = b / a;

// console.log(Multiplicação);
// console.log(soma);
// console.log(subtracao);
// console.log(subtraia);
// console.log(divisao);

// Gabarito:


//const a = 10;
//const b = 5;

//console.log('Soma: ' + (a + b));
//console.log('Subtração: ' + (a - b));
//console.log('Multiplicação: ' + (a * b));
//console.log('Divisão: ' + (a / b));
//console.log('Módulo: ' + (a % b));


// 2- Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

//const maior = 50;
//const menor = 25;

//if(maior > menor){
//    //console.log("o maior número é 50");
//} else {
//    //console.log('O menor número é 25');
//}

// GABARITO:


//const a = 20;
//const b = 21;

//if (a > b) {
//  //console.log("'a' é maior que 'b'");
//} else {
//  //console.log("'b' é maior que 'a'");
//};

// 3- Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

//const idadeJosi = 45;
//const idadeSam = 42;
//const idadeheitor = 17
//
//if(idadeJosi > idadeSam && idadeJosi > idadeheitor){
//    console.log("Josi é a pessoa mais velha e tem " + idadeJosi + ' anos' );
//} else if(idadeSam > idadeheitor){
//    console.log("Samuel é a pessoa mais velha e tem " + idadeSam + ' anos');
//} else {
//    console.log("Heitor é a pessoa mais velha e tem " + idadeheitor + ' anos');
//}

//GABARITO


//const a = 6;
//const b = 4;
//const c = 2;
//
//if (a > b && a > c) {
//  console.log('O maior número é: ' + a + ' (a)');
//} else if (b > a && b > c) {
//  console.log('O maior número é: ' + b + ' (b)');
//} else {
//  console.log('O maior número é: ' + c + ' (c)');
//};

// 4- Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".

//const valor = 'negativy'
//
//switch(valor){
//    case 'positivo':
//        console.log('Positive');
//        break;
//    case 'negativo':
//        console.log("Negative");
//        break;
//    default:
//        console.log('Zero');
//}

//GABARITO


//const number = 4;
//
//if (number > 0) {
//  console.log('positive');
//} else if (number < 0) {
//  console.log('negative');
//} else {
//  console.log('zero');
//};




