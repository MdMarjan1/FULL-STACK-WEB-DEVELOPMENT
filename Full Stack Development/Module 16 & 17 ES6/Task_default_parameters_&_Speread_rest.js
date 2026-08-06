const Calculator = (number, ...restNumber) =>{ // rest Operator
  const total = restNumber.reduce((accuMalate, CurrentNumber) =>{  // use reduce method
    return accuMalate+=CurrentNumber
  },0);

  let disCount = (total * number) / 100
  let finalPrice = total - disCount
  return finalPrice
} 

console.log(Calculator(10, 500, 300, 200));
console.log(Calculator(5, 500, 700, 900, 1000));

