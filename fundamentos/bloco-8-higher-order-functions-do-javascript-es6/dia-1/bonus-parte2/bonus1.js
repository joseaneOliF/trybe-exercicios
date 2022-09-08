// Parte II
// 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.

// Solução:
// Devemos criar um objeto game actions que terá o turno do guerreiro com uma função. O parâmetro passado deverá ser nossa callback de dano do guerreiro. Dentro dela, executamos a função passando um objeto que representa o guerreiro. Subtraímos de dragon.healthPoints o resultado de warriorAttack. Por fim vamos atribuir o dano à uma chave de dano do warrior. Assim podemos trabalhar com estatísticas do turno depois.

const gameActions = {
    warriorTurn: (warriorAttack) => {
      const warriorDamage = warriorAttack(warrior);
      dragon.healthPoints -= warriorDamage;
      warrior.damage = warriorDamage;
    },
  };
  
  gameActions.warriorTurn(warriorAttack);