
function isSum(a, b, cb){
    let x = a+b
    cb(x)
}
function isResult(result){
    console.log(result);
}

isSum(5, 6, isResult)

