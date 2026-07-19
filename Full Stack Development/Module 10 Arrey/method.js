// includes 
let x = ['jam', 'mango', 'orange', 'Banana', 'brot']
let y = x.includes('jam')
console.log(y); // true
let a = x.includes('Trina')
console.log(a); // false


let a1 = ['Marjan', 'Rifat', 'Wasim', 'Rabbi', 'Swajon']
if(a1.includes('Rifat')){
    console.log('He is a MCC');
}else{
    console.log('Wonderfull Day');
}

// ---------------------------------------
//concat
let nak1 = [45, 55, 65, 75, 85, 95, 35]
let nak2 = [70, 80, 90]
let round = nak1.concat(nak2)
console.log(round);

// ---------------------------------------
//join
let kk1 = [69, 79, 89, 99, 29]
console.log(kk1.join(', ')); // 69, 79, 89, 99, 29

// ---------------------------------------

//indexOf
let ju1 = ['Marjan', 'Rifat', 'wasim', 'Rabbi', 'Swajon']
let re = ju1.lastIndexOf('wasim')
console.log(re); // indexNumber 2

// ---------------------------------------

let be = ju1.indexOf('tuni')
console.log(be); // indexNumber -1

// ---------------------------------------
// this method cheak is it arrey ?
let ho1 = [69, 79, 89, 99, 29]
console.log(Array.isArray(ho1)); // true

console.log(Array.isArray([61])); //true

console.log(Array.isArray(50)); //false

// ---------------------------------------

let ho2 = [69, 79, 89, 99, 29]
let ho3 = ho2.slice(1,3)
console.log(ho3); // 79 89

// ---------------------------------------




