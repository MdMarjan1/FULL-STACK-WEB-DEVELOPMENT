const calculateBMI = (weight, height) =>{
    if(weight<=0 || height<=0  ){
        return `Invalid`
    }
    let Bmi = weight / (height * height)
    let decimal_number = Number(Bmi.toFixed(2))
    return decimal_number
 
}



console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(50, 1.6));
console.log(calculateBMI(60, -1.7));