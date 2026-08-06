let valu = [100, 600, 10, 20, 30, 40, 500, 1000]

const find = valu.find((top)=>{
    return top >= 40
})
console.log(find);
// find out frist element based on condition



let olo = [
   {
      name:'apple',
      price: 78000
   },

   {
      name: "tecno",
      price: 15000
   },

   {
      name: 'samsung',
      price: 65000
   },

   {
      name: "oppo",
      price: 45000
   },

   {
      name: "redmagic",
      price: 110000,
   },

   {
      name: 'realme',
      price: 12000

   }
]

const lowPhn = olo.find((price)=>{
    return price.price <= 25000
})
console.log(lowPhn);

// he look frist low price 