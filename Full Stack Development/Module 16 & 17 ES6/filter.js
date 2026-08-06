let valu = [10, 20, 30, 40, 500, 1000]
const chek = valu.filter((high)=>{
   return high > 30
})
console.log(chek);

// ================================

let gol = [45, 78, 90, 45, 500]
const ql = gol.filter((ros)=>{
   if(ros>=90){
      return true
   }
   else{
      false
   }
})
console.log(ql);

// ================================

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

const hiPrice = olo.filter((prices)=>{
   return prices.price >= 40000
})
console.log(hiPrice);

const lowPrice = olo.filter((lowP)=>{
   return lowP.price <= 20000
})
console.log(lowPrice);