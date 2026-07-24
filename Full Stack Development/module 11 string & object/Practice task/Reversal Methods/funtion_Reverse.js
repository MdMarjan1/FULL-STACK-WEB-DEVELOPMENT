// let str = 'Javascript'
function reverseString(str){
    let revse = ""
    for(let rev of str){
        revse = rev+revse
    }
    return revse
}
console.log(reverseString('JavaScript'));