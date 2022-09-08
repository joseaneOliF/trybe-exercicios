// const products = [
//     {
//       name: 'laptop',
//       price: 1000,
//       id: 3,
//     },
//     {
//       name: 'desktop',
//       price: 1500,
//       id: 2,
//     },
//     {
//       name: 'phone',
//       price: 500,
//       id: 1,
//     },
//   ];
//   
//   console.log(products.sort());
  
const adultos = [
    {
      peso: 100,
      altura: 1.85,
    },
    {
      peso: 90,
      altura: 1.72,
    },
    {
      peso: 79,
      altura: 1.99,
    },
  ];
  
  // IMC = Índice de Massa Corporal
  
  function IMC(adulto) {
    return parseFloat((adulto.peso/(Math.pow(adulto.altura,2))).toFixed(2));
  }
  
  console.log(adultos.map(IMC));
  