//Exercício 3
//🚀 Chegou a hora de tornar nosso código mais interativo! Vamos adicionar inputs de entrada para quem usar.
//
//Edite o código para que os valores de weight e height sejam informados pela pessoa ao responder as perguntas: “What’s your weight?” e “What’s your height?”. Deve-se utilizar o pacote readline-sync. 

const readline = require('readline-sync')

function calculadoraIMC(peso, altura) {

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaEmMetros = altura/100;

  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = (peso/alturaAoQuadrado);

  return imc;
};

function main(){
  const peso = readline.questionInt('Qual o seu peso?(em kg)');
  const altura = readline.questionInt('Qual a sua altura?(em cm)');

  const imc = calculadoraIMC(peso, altura)

  console.log(`IMC: ${imc.toFixed(2)}`);

}

main();