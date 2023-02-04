// Exercício 5
// 🚀 Vamos sofisticar um pouco mais nosso exercício. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:
// 
// Considere a seguinte tabela para classificar a situação do IMC:
// 
// IMC	Situação
// Abaixo de 18,5	Abaixo do peso (magreza)
// Entre 18,5 e 24,9	Peso normal
// Entre 25,0 e 29,9	Acima do peso (sobrepeso)
// Entre 30,0 e 34,9	Obesidade grau I
// Entre 35,0 e 39,9	Obesidade grau II
// 40,0 e acima	Obesidade graus III e IV

const readline = require('readline-sync')

function calculadoraIMC(peso, altura) {

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaEmMetros = altura/100;

  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = (peso/alturaAoQuadrado);

  return imc;
};

const IMC_MAX_E_MIN = {
  'Abaixo do peso(magreza)': {
    minIMC: 0,
    maxIMC: 18.4,
  },
  'Peso Normal': {
    minIMC: 18.5,
    maxIMC: 24.9,
  },
  'Acima do peso(sobrepeso)': {
    minIMC: 25,
    maxIMC: 29.9,
  },
  'Obesidade I': {
    minIMC: 30.0,
    maxIMC: 34.9,
  },
  'Obesidade II': {
    minIMC: 35,
    maxIMC: 39.9,
  },
  'Obesidade III': {
    minIMC: 40,
    maxIMC: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

function handleIMCResult(imc) {
  const situacoes = Object.keys(IMC_MAX_E_MIN); // ['Underweight', 'Normal Weight', 'Overweight'...]

  const resultFind = situacoes.find((status) => {
    const { maxIMC, minIMC } = IMC_MAX_E_MIN[status]; // acessamos as informações do intervalo da situação iterada

    // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
    return imc >= minIMC && imc <= maxIMC;
  })
  return resultFind;
};

function main(){
  const peso = readline.questionFloat('Qual o seu peso?(em kg)');
  const altura = readline.questionInt('Qual a sua altura?(em cm)');

  const imc = calculadoraIMC(peso, altura)
  const bmiResult = handleIMCResult(imc);

  console.log(`IMC: ${imc.toFixed(2)}`);
  console.log(`bmiResult ${bmiResult}`);
}

main();