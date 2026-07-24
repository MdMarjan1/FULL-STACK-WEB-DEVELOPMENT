let car = {
    model: 'BMW',
    reg: 2017,
    color: 'Black',
    carModel: ['black-c', 'Orange-c', 'Blue-c'],
    isValid: true
}
console.log(car);
console.log(car.model);
console.log(car['reg']);
console.log(car['carModel'][2]);
console.log(car['carModel']);



let cAt = {
    origin: 'Italy',
    'date of birth': '26 july',
    'fav food': 'fish',
    color: 'Orange',
    age: 25
}
console.log(cAt['date of birth']);

const Bob = 'fav food'
console.log(cAt[Bob]); //fish


// value change & new key value add
let student = {
    name: 'Marjan',
    roll: 65,
    'section-grop': 'science',
    'address-info': 'Donia'
}
console.log(student);

// value change
student.name = 'Rifat'
console.log(student);

student['address-info'] = 'Italy'
console.log(student);


// new key & value add
student.dress = 'Shirt'
console.log(student);

student['id number'] = 6969
console.log(student);

// use variable
const keyoo = "Shift";
student[keyoo] = "morning";
console.log(student);


