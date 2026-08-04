const student = {
    name: "Marjan",
    role: 56,
    age:23
}
// const {name, age:year} = student
// console.log(name, year);

// ================================

let girls = {
    name: "tina",
    age: 23,
    Grpup: "science",
    address:{
        location: 'Baridara',
        no: 263,
        lift: "7-floor"
    }
}
const {name, age, address:myAddress} = girls
const {no, lift} = myAddress
console.log(name, age, no, lift);