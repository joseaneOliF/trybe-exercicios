// Objetos são estruturas ou coleções compostas por pares chave-valor. Também é possível armazenar um objeto dentro de outro, ou até mesmo dentro de um array.

//let car = {
//    type: 'Fiat',
//    model: '500',
//    color: 'white',
//  };

//Para acessar as chaves dentro de um objeto, temos duas formas:
//notação de ponto: car.type
//notação de colchetes: car[type]
//console.log("A marca do carro é " + car["type"])

//let diasDaSemana = {
//    : 'domingo',
//    : 'segunda',
//    : 'terça',
//    : 'quarta',
//    : 'quinta',
//    : 'sexta',
//    : 'sábado',
//    };
//    
//    diasDaSemana.1; // SyntaxError: Unexpected number
//    console.log(diasDaSemana['1']); // domingo


// No código acima, ocorre um erro por usar notação de ponto ao invés de notação de colchetes com uma propriedade nomeada com número.

// Agora veja esse exemplo:

let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4

// Neste exemplo, a chave banco do objeto conta, guarda um outro objeto, e também há o uso de variável na notação de colchetes, além de você poder ver exemplos usando notação de ponto e notação de colchetes.

// Neste outro exemplo, veja como vamos adicionar as informações de forma encadeada:

let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  
  console.log(usuario['id']); // 99
  console.log(usuario.email); // jakeperalta@gmail.com
  
  console.log(usuario.infoPessoal.endereco.rua); // Smith Street
  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

  //O objeto deste exemplo possui a chave infoPessoal que possui outras 3 chaves, uma delas sendo endereco, que é outro objeto! Ou seja, o objeto usuario possui outros dois dentro dele.

  // Agora, e se o nosso objeto está dentro de um array? Como acessamos as propriedades do objeto? Veja este exemplo:

  let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey

//  Para fixar
//Agora vamos fazer alguns exercícios de fixação para consolidar os conhecimentos adquiridos no video anterior! 😉

//1 - Crie um objeto player contendo as variáveis listadas abaixo.

//let name = 'Marta';
//let lastName = 'Silva';
//let age = 34;
//let medals = { golden: 2, silver: 3 };

let player = {
    name:"Marta",
    lastName:"Silva",
    age:34,
    medals: {
        golden:2,
        silver:3,
    }
}

// 2 - Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

//console.log("A jogadora " + player.name + " " + player.lastName + " " + "tem" + " " + player.age + "anos de idade");

//3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018]
//console.table(player);


//4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log("A jogadora " + player.name + " " + player.lastName + " " + "foi eleita a melhor do mundo 6 vezes nos anos " + player.bestInTheWorld);

//5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata." );

//Agora veremos uma variação do laço for, que nos garante facilidade ao lidar com objetos.

