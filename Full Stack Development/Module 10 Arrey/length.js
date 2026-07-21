const number=[25, 30, 35, 45, 60, 10, 150]
const count = number.length
console.log(count);
console.log(number);
console.log(number[1]); //30


let fruit = ['mango','jam','jackfruit','orange','rose','Dragon']
console.log(fruit.length);
console.log(fruit);
console.log(fruit[0]); // mango
console.log(fruit[3]); //orange
let cox = fruit[fruit.length-1] // Dragon
console.log(cox);
fruit[1]='Vbanana'
console.log(fruit);//[ 'mango', 'Vbanana', 'jackfruit', 'orange', 'rose', 'Dragon' ]

//---------------------------------------------------------------------------------------

let names = ['rifat', 'sonam', 'amjad', 'wasim', 'korim', 'fahim']
console.log(names);
let count = names.length
console.log(count); //6

let indexPosition = names.indexOf('amjad') //2
console.log(indexPosition);

let valueIndex = names[3]
console.log(valueIndex); // wasim

let valueChange = names[4]='trina'
console.log(valueChange);
console.log(names);

let book = ['german', 'italy', 'norway', 'swiss', 'finland', 'bangla']
console.log(book[book.length - 1]);
console.log(book[book.length - 2]);


let numbers = [15, 25, 35, 45, 55];

console.log(numbers.length);
console.log(numbers[numbers.length - 1]);
console.log(numbers[numbers.length - 2]);