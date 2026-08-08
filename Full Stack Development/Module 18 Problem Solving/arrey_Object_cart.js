const cartCalculator = (products) => {
  let sumprice = 0;
  let sumqty = 0;
  for (let product of products) {
    const { price, qty } = product;
    sumqty += qty;
    sumprice = sumprice + price * sumqty;

    return {sumprice, sumqty};
  }
};

let products = [
  { name: 'pen', price: 100, qty: 3 },
  { name: 'NoteBook', price: 320, qty: 2 },
];

console.log(cartCalculator(products));
