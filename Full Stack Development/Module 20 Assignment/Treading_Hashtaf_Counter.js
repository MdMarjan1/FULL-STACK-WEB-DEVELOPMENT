
const  countHashtags = (caption) =>{
    if(typeof caption !== "string"){
        return "Invalid"
    }

    const wordDivided = caption.split(" ");
    const findHashTag = wordDivided.filter(countHash => countHash.startsWith("#"))
    let longestTag = ""
    for(let i = 0; i < findHashTag.length; i++){
        const tag = findHashTag[i].slice(1)
        if(tag.length > longestTag.length){
            longestTag = tag
        }
    }
    return {hashtagCount: findHashTag.length, longestTag: longestTag}
    
}

console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"));
console.log(countHashtags("No hashtags here"));
console.log(countHashtags("#ai #ml data science"));
console.log(countHashtags(123));
console.log(countHashtags(["#fun"]));

console.log(countHashtags("#"));