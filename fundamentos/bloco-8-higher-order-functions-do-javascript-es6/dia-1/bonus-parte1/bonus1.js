// Parte I - Game Actions Simulator
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.

// 1 - Crie uma função que retorna o dano do dragão.
//O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonAttack = (dragon) => { // Faremos uma fórmula básica para o dano do dragão. Precisamos multiplicar um número aleatório pelo seu atributo strength para calcular o valor máximo. Vamos definir os dois valores de dano mínimo e máximo.
    const minDmg = 15;
    const maxDmg = Math.floor(Math.random() * dragon.strength);
    const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg; //Vamos adicionar nosso retorno. Caso nossa multiplicação seja menor do que 15, devemos retornar 15, senão retornamos o valor da multiplicação.

    return dragonDmg;
 };

 
