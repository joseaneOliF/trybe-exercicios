// Callbacks
// Agora que o conceito de assincronicidade está mais nítido, é hora de dar luz às callbacks!
// De forma resumida, callback é uma função passada como parâmetro para outra função. Um exemplo de função callback é quando chamamos a função setTimeout, essa função recebe dois parâmetros: o primeiro é a função callback, que passamos por meio de uma arrow function; e o segundo é o tempo (em milissegundos) que o interpretador irá esperar para executar a função. Observe a estrutura dela: setTimeout(1parametro, 2parametro);
// O primeiro parâmetro é uma callback sem nome: () => {}.
// O segundo parâmetro será o tempo de espera: 2000 (2000 milissegundos ou 2 segundos, por exemplo).
// setTimeout(() => {}, 2000);
// Agora, veremos um exemplo prático de como podemos utilizar funções callback. Copie e analise com calma cada trecho da implementação do código, se necessário, volte na explicação para que a implementação seja bem compreendida!
// Este exemplo está em português para facilitar a compreensão, os próximos estarão em inglês, ok?


// despesas.js

const minhasDespesas = [
    {
      academia: 99,
    },
    {
      ifood: 200,
    },
    {
      celular: 60,
    },
    {
      internet: 100,
    },
  ];
// Declaramos nossa renda
  const minhaRenda = 1000;

// Neste primeiro trecho de código, temos duas declarações de variáveis. A primeira delas, minhasDespesas, é um array de objetos que representa os gastos de uma pessoa no mês. A segunda, minhaRenda, representa o quanto essa pessoa recebeu nesse mesmo mês.
// Nosso próximo passo será implementar uma função que trate essas informações para que tenhamos como resultado um balanço de entradas e saídas do mês.

  const despesaMensal = (renda, despesas, callback) => {
// Definimos que a despesa total é igual ao valor retornado pela função callback (que é o parâmetro da nossa função)
// que vai receber nosso parâmetro/variável "despesas"
    const despesaTotal = callback(despesas);
    
// Definimos nosso saldo final, que é nossa renda - nossa despesa total
    const saldoFinal = renda - despesaTotal;
  
    console.log(`Balanço do mês:
      Recebido: R$${renda},00
      Gasto: R$${despesaTotal},00
      Saldo: R$${saldoFinal},00 `);
  };

// Neste trecho da implementação, podemos notar que foi adicionada a função despesaMensal que recebe três parâmetros: renda, despesas, e callback. Acredito que você deva estar pensando: "O que este parâmetro callback está fazendo nesta função?".
// Como vimos anteriormente, callback é, basicamente, uma função passada por parâmetro para outra função. Neste exemplo, o parâmetro callback receberá uma função que retornará o quanto gastamos no mês, ou seja, nossa função callback irá realizar a lógica necessária para somar todos os gastos contidos no array de objetos minhasDespesas e retornará esse valor para a constante despesaTotal.

// const somaDespesas = (despesas) => {
//     const custoItem = despesas.map((item) => Object.values(item));
//     const despesaTotal = custoItem.reduce((acc, curr) => {
//       const soma = acc + curr[0];
//       // acc é a sigla para accumulator (acumulador)
//       // curr é a sigla para current_value (valor atual)
//       return soma;
//     }, 0);
//     return despesaTotal;
//   };

// Por fim, podemos observar a implementação da função callback, representada pela função somaDespesas. Essa função está tratando as informações contidas no array de objetos minhasDespesas e retornando o valor total de gastos.
// Em síntese, o que fizemos foi:
// 1 - Criamos variáveis que representam o quanto recebemos no mês e o quanto gastamos no mês.
// 2 - Implementamos a função despesaMensal que recebe três parâmetros: nossas despesas, nossa renda e a função callback.
// 3 - Realizamos a implementação da função callback representada por somaDespesas que recebe nossos gastos mensais e retorna um valor de gastos total.
// 4 - Adicionamos somaDespesas na chamada da função despesaMensal e como resultado temos o balanço mensal.
// O arquivo completo ficará assim:

// Definimos nossa função que será passada como parâmetro
// essa função recebe o parâmetro despesas a partir da função principal despesaMensal
const somaDespesas = (despesas) => {
    // Separamos cada item do nosso array de despesas
    // e fazemos um reduce para somar os valores
    const custoItem = despesas.map((item) => Object.values(item));
    const despesaTotal = custoItem.reduce((acc, curr) => {
      const soma = acc + curr[0];
      // acc é a sigla para accumulator (acumulador)
      // curr é a sigla para current_value (valor atual)
      return soma;
    }, 0);
    return despesaTotal;
  };
  
  // Executamos a função principal com as variáveis renda, despesas
  // e a nossa função somaDespesas
  // callback = somaDespesas
  despesaMensal(minhaRenda, minhasDespesas, somaDespesas);
  
  // Saída:
  //  Balanço do mês:
  //  Recebido: R$1000,00
  //  Gasto:    R$459,00
  //  Saldo:    R$541,00