
function isPalindrome(word){
    let rev = ""
    for(let i of word){
        rev= i + rev
    }
    if(rev===word){
        return true
    }
    else{
        return false
    }
}
console.log("frist result",isPalindrome("madam"));
console.log("2nd result",isPalindrome("Student"));

// ================================================

function usePalindrome(sens){
    let blank =""
    for(let u=sens.length-1; u>=0; u--){
        let wow = sens[u];
        blank=blank+wow
    }
    if(blank===sens){
        return true
    }
    else{
        return false
    }
}
console.log("3rd answer",usePalindrome("ded"));


