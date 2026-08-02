// keys
// values
// entries

let y1 = {
    name: "marjan",
    role: 56,
    class: 4
}
const entries = Object.entries(y1)

const keys = Object.keys(y1)

console.log(entries);

console.log(keys);

for(let el of entries){
    const [keyslll, value] = el
    console.log(keyslll, value);
}


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
delete pk.name
console.log(pk);
pk.licence = 520
console.log(pk);
pk.balance = 7500
console.log(pk);


// freeze
//no value change
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