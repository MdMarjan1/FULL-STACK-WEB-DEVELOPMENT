let scores = { math: 90, science: 85, art: 95 };
for(let scor in scores){
    let values = scores[scor]
    // console.log(scor, values);
}

// ------------------------------

let sum = 0
for(let scr in scores){
    let valu = scores[scr]
    sum= sum+valu;
}
let totalValues = Object.values(scores).length
 let avg = sum / totalValues
 console.log(avg);