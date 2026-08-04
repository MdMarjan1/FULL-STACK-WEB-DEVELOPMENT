
// arrow function syntex
const isnam=(name)=>{

}

// ================================

const isHi=(name) => {
    return `hi i am ${name}`;
}
console.log(isHi("fahim"));

// ================================

const ishlw = (name) => `hi i du ${name}`;
console.log(ishlw("Marjan"));
console.log(ishlw("Niloy"));

// ================================

const sumOfMultiply=(a, b) => {
    const sum = a+b
    const multiply = sum *3
    return multiply;
};
console.log(sumOfMultiply(5,6));

// ================================

const hop = () =>{
    return `i am here`
}
console.log(hop());

// ================================

const isPlus = (num1, num2) => {
    let plus = num1 + num2
    return plus
}
console.log(isPlus(20, 25)); // 45

// ================================

let std ={
    name: "Marjan",
    role: 56,
    isShow: () => {
        return `Role ${std.role}`
    }
}
console.log(std.isShow());

// ================================

let dcc = {
    nam: "SAAD",
    role: 56,
    isHe: () => {
        return `role saad ${dcc.role}`
    }
}
console.log(dcc.isHe());
