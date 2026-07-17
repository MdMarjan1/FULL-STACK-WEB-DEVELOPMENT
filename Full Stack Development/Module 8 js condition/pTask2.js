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

let sPeed = 85
if(sPeed > 80){
    console.log('Overspeeding');
}
else{
    console.log('Normal speed');
}

// -----------------------------------

let hasTicket = true
let aGe = 20
if(hasTicket && aGe>18){
    console.log('Entry allowed');
}
else{
    console.log('Not allowed');
}

// -----------------------------------

let isHoliday = true
let isWeekend = false
if(isHoliday||isWeekend){
    console.log('no work today');
}

// -----------------------------------

let uSername = 'admin'
let passWord = 123456
if(uSername==='admin' && passWord===123456){
    console.log('Login successful');
}
else{
    console.log('Access Denide');
}

// -----------------------------------

let mArk = 83
if(mArk>=80 && mArk<=100){
    console.log('A+');
}else if(mArk>=70 && mArk<=79){
    console.log('A');
}else if(mArk>=60 && mArk<=69){
    console.log('B');
}else if(mArk>=50 && mArk<=59){
    console.log('C');
}else if(mArk>=40 && mArk<=49){
    console.log('D');
}else if(mArk>=33 && mArk<=39){
    console.log('E');
}else{
    console.log('F');
}

// -----------------------------------

/*
BMI Calculator and Health Category
Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/

let hEight = 1.6
let weIght = 78

let bmi = weIght/(hEight*hEight)
if(bmi<18.5){
    console.log('under weight');
}else if(bmi >= 18.5 && bmi <= 24.9){
    console.log('You are normal');
}else if(bmi >= 25 && bmi <= 29.9){
    console.log('You are overheight');
}else{
    console.log('you are obese');
}

// -----------------------------------

let sEason = 3

if(sEason === 4 || sEason === 5){
    console.log('Summer');
}else if(sEason === 6 || sEason === 7){
    console.log('Monsson');
}else if(sEason === 8 || sEason === 9){
    console.log('Autumn');
}else if(sEason === 10 || sEason === 11){
    console.log('Late Autumn');
}else if(sEason === 12 || sEason === 1){
    console.log('Winter');
}else if(sEason === 2 || sEason === 3){
    console.log('Spring');
}

// -----------------------------------

let Age = 19
let hasID = true
if(Age >= 18){
    if(hasID){
        console.log('eligible for vote');
    }
    else{
        console.log('you eligible but you \n "havent ID"');
    }
}else{
    console.log('not eligible \n "age low"');
}

// -----------------------------------

let isLoggedin = true
let isAdmin = false
if(isLoggedin){
    if(isAdmin){
        console.log('Admin Dashboard');
    }else{
        console.log('User Dashboard');
    }
}else{
    console.log('Please Login');
}

// -----------------------------------

let nu = 4
let re = nu %2 == 0 ? 'even' : 'odd'
console.log(re);

// -----------------------------------

let agE = 15
let gen = agE >= 18 ? 'adult' : 'minor'
console.log(gen);

// -----------------------------------