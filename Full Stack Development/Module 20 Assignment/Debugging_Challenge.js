const generateLeaderboard = (students)=> {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }

    for(let x of students){
        const key = Object.keys(x)
        if(!key.includes("name") || !key.includes("score")){
            return "Invalid"
        }
        if(typeof x.score !== "number"){
            return "Invalid"
        }
    }

    const qualified = students.filter(student => student.score >= 70);
    
    const names = qualified.map(student => student.name.toUpperCase());
        
    return names.slice(0, 3);
}


let x = [{name:"Rafi",score:90},{name:"Sadia",score:65},{name:"Karim",score:85},{name:"Nafis",score:75}]
console.log(generateLeaderboard(x));

console.log(generateLeaderboard([{name:"A",score:70},{name:"B",score:71}]));

console.log(generateLeaderboard([]));

console.log(generateLeaderboard("students"));

console.log(generateLeaderboard([{name:"Rafi"}]));

console.log(generateLeaderboard([{name:"Rafi",score:"90"}]));