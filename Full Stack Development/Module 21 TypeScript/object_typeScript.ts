let isObj1:{name:string, roll:number, present:boolean} ={
    name: 'mark',
    roll: 45,
    present: true
}
console.log(isObj1.name)


// optional property
let isObj2:{name:string, roll:number, present?:boolean, id?:number} ={
    name: 'ak',
    roll: 456,
    present: false
}
console.log(isObj2);


//literals
// set fixed value 
let isObj3:{name:'ES6', roll:number, persent:boolean} = {
    
    name: 'ES6',
    roll: 456,
    persent: true
}

console.log(isObj3.name)