// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];
// 
// const nums = num1.concat(num2);
// 
// console.log(nums);

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(arrays) {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
  }
  console.log(flatten(arrays));