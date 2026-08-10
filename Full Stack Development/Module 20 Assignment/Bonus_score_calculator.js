const bonusScore = (numArr) =>{
    if(!Array.isArray(numArr) || numArr.length === 0){
        return "Invalid"
    }

    for(let i of numArr){
        if(typeof i !== "number"){
            return "Invalid"
        }
    }

    const bonus = numArr.map(tenBonus => tenBonus+10).reduce((sum,currentvalue)=> sum+currentvalue,0)
    return bonus

}

console.log(bonusScore([80, 65, 90, 75]));
console.log(bonusScore([100]));
console.log(bonusScore([0, 10]));
console.log(bonusScore([]));
console.log(bonusScore("scores"));
console.log(bonusScore([80, "90", 70]));
