"use strict";
//rest operator
/*
Rest Operator ...
কখন ব্যবহার হয়?
👉 যখন অনেকগুলো value-কে একসাথে collect করে একটি array/object বানাতে চাও।
*/
Object.defineProperty(exports, "__esModule", { value: true });
const total = (...numbers) => {
    const final = numbers.reduce((sum, currentValue) => sum + currentValue, 0);
    return final;
};
console.log(total(41, 50, 60));
// -------------------------------------------------------
const device = {
    nam: 'iPhone',
    type: 'samsung',
    price: 999,
};
const { nam, ...nextAll } = device;
console.log(nam, nextAll);
// Spread operator
/*
Spread Operator ...
কখন ব্যবহার হয়?
👉 যখন কোনো array/object-এর ভিতরের value-গুলোকে ছড়িয়ে দিতে চাও।
*/
const numb1 = [1, 2, 3, 4, 5];
const numb2 = [6, 7, 8];
const allnumbers = [...numb1, ...numb2];
console.log(allnumbers);
//# sourceMappingURL=Spread.js.map