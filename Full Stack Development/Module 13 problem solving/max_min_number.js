function isHigh(number){
    let hight = number[0]
    for(let i=0; i<number.length; i++){
        let currentElement = number[i]
        if(currentElement > hight){
            hight = currentElement
        }
    }
    return hight

}

console.log(isHigh([20, 50, 100, 1525, 60, 5000, 300, 10000]));


function isHighValue(num){
    let los = num[0]
    for(let x of num){
       if(x>los){
        los=x
       }
    }
    return los
}

console.log(isHighValue([20, 50, 100, 1525, 60, 5000, 300, 10000]));