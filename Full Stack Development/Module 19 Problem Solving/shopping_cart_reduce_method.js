const CartTotal = (cart) => {
  const total = cart.reduce((accoMulate, currentValue)=>{
        return accoMulate+ (currentValue.price * currentValue.qty)
  },0)
  return total
};

let cart = [
  { name: 'pen', price: 52, qty: 4 },
  { name: 'bbok', price: 10, qty: 3 },
];

console.log(CartTotal(cart));
