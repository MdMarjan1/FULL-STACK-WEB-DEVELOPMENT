function createCounter(){
    let c = 0

    return function(pay){
        c+=pay
        return c
    }
}
let coffepay = createCounter()
console.log(coffepay(250));
console.log(coffepay(200));
let pizzaa = createCounter()
console.log(pizzaa(500));


function createPu(){
    let x = 0
    return function(){
        x++
        return x
    }
}
let pai = createPu()
console.log(pai());