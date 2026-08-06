const receipt_generator=(item, price, qty)=>{
    return `${item} x${qty} = ${price*qty} Taka` //templete string
}
console.log(receipt_generator("pen",20, 3));
console.log(receipt_generator("Eraser",15, 4));
console.log(receipt_generator("Book", 150, 2 ));