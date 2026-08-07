const ShippingCost = (oderAmount, shippingFee=60) =>{
    if(oderAmount >= 1000){
        return "Free Shipping "
    }
    else if (oderAmount < 1000){
           return `shipping Fee: ${shippingFee}Taka`
    }
}

console.log(ShippingCost(1200));
console.log(ShippingCost(500));
console.log(ShippingCost(500, 100));

// ================================

const shipping = (Amount, Charge=60) =>{
     return Amount >= 1000? "Free Shipping" :  `shipping Fee ${Charge} Taka`
}
console.log(shipping(1200));
console.log(shipping(600));
console.log(shipping(400, 100));