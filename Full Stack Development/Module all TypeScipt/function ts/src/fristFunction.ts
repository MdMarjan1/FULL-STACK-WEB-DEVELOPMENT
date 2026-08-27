const isStudent = (num1:number, num2:number):number =>{
    const total = num1+num2;
    return total
}

console.log(isStudent(50,10));



const isInfo = (nummer: number[], rate:number, name:string):string =>{
    return `number arrey ${nummer} price ${rate} name ${name}`
}

console.log(isInfo([52, 42, 12, 12], 450, 'Omar faruk'));


const IsNm = (fristName:string, lastName:string):string =>{
    return `Hi my Fristname ${fristName} & lastName ${lastName}`
}
console.log(IsNm('Proma','Bapery'));
