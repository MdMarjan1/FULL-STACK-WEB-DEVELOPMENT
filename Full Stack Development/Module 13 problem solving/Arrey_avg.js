
function isArrey(arr){
    let sum = 0
    for(let i of arr){
        sum+=i
    }
    let avg = sum / arr.length
    return avg
}
console.log(isArrey([20, 50, 6, 100, 502, 10]));

