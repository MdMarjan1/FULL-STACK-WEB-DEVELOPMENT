function isEven(num){
    let sum = 0
    for(let i of num){
        if(i%2 === 0){
            sum = i +sum
        }
    }
    return sum
}

console.log(isEven([45, 20, 66, 70, 80, 95, 120, 440]));
console.log(isEven([10,20,50, 150,6]));


// ========================================================================


function isEvenNUm(numer){
    let nuArr =[]
    for(let ev of numer){
        if(ev%2 === 0){
            nuArr.push(ev)
        }
    }
    return nuArr
}
function isSUM(suhl){
    let sum = 0
    for(let x of suhl){
        sum = x + sum
    }
    return sum
}


let eevv = isEvenNUm([10, 55, 20, 50, 150, 6, 15 ,25, 35]);
let zoom = isSUM(eevv)
console.log(zoom);