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

// ---------------------------------------

let result1 ="5"
let result2 =5
console.log(result1==result2); //true

let result3 ="5"
let result4 =5
console.log(result3===result4); //false

// -----------------------------------------

let isRaining = false
if(isRaining){
    console.log('Takean umbrella');
}
else{
    console.log('No need for an umbrella');
}

// -----------------------------------------

let sTock = 0
if(sTock === 0){
    console.log('Out of stock');
}

// -----------------------------------------

let nu1 = 45
if(nu1 >= 1){
    console.log('Positive number');
}
else if(nu1 < 0){
    console.log('Negative number');
}
else{
    console.log('null/0');
}

// -----------------------------------

let leapYear = 2006
if(leapYear % 4 === 0){
    console.log('this is LEAP YEAR');
}
else{
    console.log('not Leap Year');
}

// -----------------------------------

