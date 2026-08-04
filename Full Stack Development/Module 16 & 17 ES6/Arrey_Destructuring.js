// Destructuring for arrey
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]
const [ten, twenty, thirthy, forthy, , , ,eighty] = numbers
console.log(ten, twenty, thirthy, forthy, eighty); //10 20 30 40 80

// ================================

// Destructuring for Object
let a1 = {
    name: "marjna",
    role: 56,
    group: "Science",
    year: 2027
}
const {role, year} = a1
console.log(role, year);

// ================================

let a2 ={
    price: 56,
    model: 'Orange',
    brand: 'cho--cho',
    exam: {
        nam: 'ssc',
        year: 2026
    }
}

const {price, brand, model:newModel, exam:{nam}} = a2
console.log(price, brand, newModel, nam);