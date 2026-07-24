let car = {
    model: 'BMW',
    reg: 2017,
    color: 'Black',
    carModel: ['black-c', 'Orange-c', 'Blue-c'],
    isValid: true
}

for(let keys in car){
   console.log(keys, car[keys]);
}

for(let keys in car){
   let values = car[keys]
   console.log(keys, values);
}