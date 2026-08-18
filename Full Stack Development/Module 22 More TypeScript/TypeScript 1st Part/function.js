"use strict";
function buybook(title, price, discount) {
    if (discount === undefined) {
        discount = 0;
    }
    return `the book name ${title} price ${price - discount}`;
}
console.log(buybook('maya', 450, 50).toUpperCase());
