function calculate(price: number | string, textrate: number): number{
    if(typeof price === "string"){
        price = parseFloat(price)
    }
    return price * textrate
}

console.log(calculate("250", 50))