"use strict";
function text(texrate, amount) {
    if (typeof texrate === 'string') {
        texrate = parseFloat(texrate);
    }
    return texrate * amount;
}
let money = text(45, 496);
console.log(money);
