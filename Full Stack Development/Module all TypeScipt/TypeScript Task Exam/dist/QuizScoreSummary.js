"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getQuizSummary = (scores) => {
    const total = scores.reduce((sum, currentValue) => sum + currentValue, 0);
    const avg = total / scores.length;
    return {
        total: total,
        average: isNaN(0) ? avg : 0
    };
};
console.log(getQuizSummary([]));
console.log(getQuizSummary([5, 5]));
//# sourceMappingURL=QuizScoreSummary.js.map