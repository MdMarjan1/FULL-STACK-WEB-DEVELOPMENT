"use strict";
function calculate(price, textrate) {
    if (typeof price === "string") {
        price = parseFloat(price);
    }
    return price * textrate;
}
console.log(calculate("250", 50));
