function doubleOrhalf(price,isDouble){
    if(isDouble===true){
        const userPrice = price*2
        return userPrice
    }
    else{
        const userPrice = price/2
        return userPrice
    }
}
const myPrice = doubleOrhalf(200,true)
console.log("mango people price",myPrice);

const leaderPrice = doubleOrhalf(200, false)
console.log("Leader price",leaderPrice);

// ================================================

function fristItemDouble(arr){
    const twoX = arr[2]
    const total = twoX*2
    return total
}

let arr = [50, 60, 100, 250, 300, 55]
const doubleX = fristItemDouble(arr)
console.log(doubleX); // 200

let samu = [10, 20, 30, 50, 60]
const samx = fristItemDouble(samu)
console.log(samx);

// ================================================


let adx ={
    name: 'rifat',
    roll: 250,
    class: 6,
    group: 'science',
    shift: 'morning'
}

function cheakOPtion(student){
    const fg = student.name
    return fg
}

const dd1 = cheakOPtion(adx)
console.log(dd1);
