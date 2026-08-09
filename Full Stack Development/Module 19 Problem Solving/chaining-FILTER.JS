const total = (cart, miniPrice) => {
  const highPrice = cart
    .filter((product) => product.price >= miniPrice)
    .map((product) => product.price * product.qty)
    .reduce((accumolate, currentVersion) => accumolate + currentVersion, 0);

    return highPrice
    
};


let cart = [
  { name: 'pen', price: 20, qty: 3 },
  { name: 'book', price: 800, qty: 1 },
  { name: 'NoteBook', price: 50, qty: 2 },
  { name: 'watch', price: 1500, qty: 1 },
];

console.log(total(cart, 500));
