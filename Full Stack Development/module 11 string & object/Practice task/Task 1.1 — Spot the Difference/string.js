// Task 1.1 — Spot the Difference
let str = "hello"
let arr = ["h", "e", "l", "l", "o"]
// cheak length
console.log(str.length); //5
console.log(arr.length); //5
// cheak index
console.log(str[0]);
console.log(arr[0]);
//try str push() method
// String
str = "hello"
try{
str.push("!")
    console.log("this String Mutable");
}catch{
    console.log("this String Immutable");
}

// Arrey
arr.push("!")
console.log(arr);