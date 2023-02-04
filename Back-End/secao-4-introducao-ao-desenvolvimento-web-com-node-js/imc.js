// Exercício 4
// 🚀 Agora temos um problema, o peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
// 
// O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre a função adequada para realizar input de valores float.
// Encontrou a função? Show! Agora utilize-a para solicitar o input de weight.

const readline = require('readline-sync')

function calculadoraIMC(peso, altura) {

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaEmMetros = altura/100;

  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = (peso/alturaAoQuadrado);

  return imc;
};

function main(){
  const peso = readline.questionFloat('Qual o seu peso?(em kg)');
  const altura = readline.questionInt('Qual a sua altura?(em cm)');

  const imc = calculadoraIMC(peso, altura)

  console.log(`IMC: ${imc.toFixed(2)}`);

}

main();