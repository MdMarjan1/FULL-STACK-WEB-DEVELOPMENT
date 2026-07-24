// delete
let car ={
    model: 'bmw',
    roll: 256,
    since: 2016,
    eng: 'japan'
}
delete car.eng
console.log(car);
delete car['since']
console.log(car);

const keys = Object.keys(car)
console.log(keys);
let valus = Object.values(car)
console.log(valus);