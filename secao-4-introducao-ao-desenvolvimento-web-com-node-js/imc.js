const PESO_KG = 80;
const ALTURA_CM = 178;

function calculadoraIMC(peso, altura) {

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaEmMetros = altura/100;

  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = (peso/alturaAoQuadrado);

  return imc;
};

function main(){
  const imc = calculadoraIMC(PESO_KG, ALTURA_CM);

  console.log(`IMC: ${imc.toFixed(2)}`);

}

main();