interface Quizfol {
    total: number;
    average: number;
}

const getQuizSummary = (scores: number[]): Quizfol =>{
    const total = scores.reduce((sum, currentValue) => sum+currentValue,0)
    const avg = total / scores.length
    return{
        total: total,
        average: isNaN(avg)? 0 : avg
    }
}
console.log(getQuizSummary([]));

console.log(getQuizSummary([5, 5]));

