function idFactorial(number){
    let multi = 1
    for(let i=1; i<=number; i++){
        multi = multi*i
    }
    return multi
}
console.log(idFactorial(7));

let factorialOne = idFactorial(8)
console.log(factorialOne);
