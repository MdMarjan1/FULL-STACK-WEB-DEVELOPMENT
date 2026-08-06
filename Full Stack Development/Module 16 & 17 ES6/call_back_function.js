
// function isSum(a, b, cb){
//     let x = a+b
//     cb(x)
// }
// function isResult(result){
//     console.log(result);
// }

// isSum(5, 6, isResult)



// function multiply (a,b, callback){
//     let count = a*b
//     callback(count)
// }
// function showResult(result){
//     console.log(result);
// }
   

// multiply(5,5,showResult)


// function plus(a, b, callback){
//     let sum = a+b
//     callback(sum)
// }
// function snow(result){
//     console.log(result);
// }

// plus(5,15, snow)


function calculate(cb,a,b){
    cb(a,b)
}

function add(a,b){
    let a1 = a+b
    console.log(a1);
}

function minus(a,b){
    let a2 = a-b
    console.log(a2);
}

calculate(add, 5, 5)
calculate(minus, 20, 5)