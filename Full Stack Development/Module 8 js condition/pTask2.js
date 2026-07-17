let price1 = 105
let price2 = 220
let comp = price1==price2
console.log(comp);  // false

let price3 = 105
let price4 = 105
let comp1 = price3==price4
console.log(comp1);  // true

let price5 = 105
let price6 = 220
let comp2 = price5!=price6
console.log(comp2);  // true

let price7 = 50
let price8 = 50
let comp3 = price7!=price8
console.log(comp3);  // false

let price9 = 50
let price10 = "50"
let comp4 = price9!==price10
console.log(comp4);  // true

let price11 = 110
let price12 = 90
console.log('>',price11>price12); //true
let price13 = 90
let price14 = 900
console.log('>',price13>price14); //false