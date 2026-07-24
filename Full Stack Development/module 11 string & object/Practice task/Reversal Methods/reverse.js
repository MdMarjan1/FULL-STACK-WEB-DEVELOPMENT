// for of
let isNames = "Javascript"
let reVerse = ""
for(let isName of isNames){
    reVerse = isName+reVerse
}
console.log(reVerse);

// method use
let isText = "Javascript"
let idDivide = isText.split('')
let isReverse = idDivide.reverse()
let isJoin = isReverse.join("")
console.log(isJoin);