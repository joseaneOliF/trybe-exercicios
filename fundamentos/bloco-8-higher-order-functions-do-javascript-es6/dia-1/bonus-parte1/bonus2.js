// 2 - Crie uma função que retorna o dano causado pelo warrior.
//   * O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

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

  const warriorAttack = (warrior) => {
    const minDmg = warrior.strength;
    const maxDmg = Math.floor(Math.random() *(minDmg * warrior.weaponDmg));
    const warriorDmg = maxDmg > minDmg ? maxDmg : minDmg;
    return warriorDmg
  };
  console.log(warriorAttack());