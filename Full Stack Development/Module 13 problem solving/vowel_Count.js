
let str = "programming Hero"
let vowels ="aeiou"
let count = 0
for(let i of str){
    if(vowels.includes(i)){
        count++
    }
}
console.log(count);
