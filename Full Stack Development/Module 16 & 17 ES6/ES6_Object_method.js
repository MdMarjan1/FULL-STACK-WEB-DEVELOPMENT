// keys
// values
// entries

let y1 = {
    name: "marjan",
    role: 56,
    class: 4
}
const entries = Object.entries(y1)
console.log(entries); 


const keys = Object.keys(y1)
console.log(keys);
console.log(keys.length,"Object Keys length");
 

const valu = Object.values(y1)
console.log(valu);

 // ================================

 const obl ={
    name: "samus",
    id: 40,
    role: 98,
    sub: "Math"
 }
 const oblKeys = Object.keys(obl)
 for(let ol of oblKeys){
    console.log(ol);
    console.log(ol, obl[ol]);
 }

// ================================
// Arrey_Destructuring

const match = {
    name: "messi",
    role: 45,
    goal: 780
}
const enti = Object.entries(match)
for(let uoo of enti){
    const [key1, value1] = uoo
    console.log(key1, value1);
}
 
// ================================

// delete method
let jk ={
    food: 'pizza',
    price: 256,
    brand: "KFC"
}
delete jk.price
console.log(jk);


// seal
// add & delete not allowed but edit is allowed
let pk = {
    name: "SL MONIR",
    bankId: 696969,
    balance: 785
}
Object.seal(pk)
// not delete
delete pk.name
console.log(pk);
// no add
pk.licence = 520
console.log(pk);
// only Edit
pk.balance = 7500
console.log(pk);

// ================================



// freeze
//no value change no edit no add 
let opk = {
    name: "SL abdul",
    bankId: 66564,
    balance: 78523
}
Object.freeze(opk)
delete opk.name
console.log(opk);

opk.bankId = 554
console.log(opk);

opk.surname = 'apple'
console.log(opk);