"use strict";
// const calculateWeeklyTotal = (expenses:number[]): number =>{
//     const total = expenses.reduce((sum, value) => sum+value,0)
//     return total
Object.defineProperty(exports, "__esModule", { value: true });
// }
const calculateWeeklyTotal = (expenses) => {
    const total = expenses.reduce((sum, value) => {
        return sum + value;
    }, 0);
    return total;
};
console.log(calculateWeeklyTotal([45, 52, 30]));
//# sourceMappingURL=ExpenseTracker.js.map