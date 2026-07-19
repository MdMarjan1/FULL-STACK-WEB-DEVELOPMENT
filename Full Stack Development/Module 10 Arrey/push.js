let numbers =[12, 52, 60, 78, 22, 22, 30]
console.log(numbers);
//push
numbers.push(1000)
console.log(numbers); // add 1000
// pop
let numbers1 =[12, 52, 60, 78, 22, 22, 30, 55, 666]
numbers1.pop()
console.log(numbers1); // remove 666

let numbers2 =[12, 52, 60, 78, 22, 22, 30, 55, 666, 787]
let fristNumber = numbers2.pop()
console.log(fristNumber); //787

let secondNumbers = numbers2.pop()
console.log(secondNumbers); //666

console.log(fristNumber,secondNumbers); //787 666

