let student ={
    name: "Azaan",
    age: 26,
    university: "DIU",
    department: "CSE"
}

// print all keys
// use method
let key = Object.keys(student)
console.log(key);

// for in
for(let property in student){
    console.log("display all keys",property);
}

// print all values
let valu = Object.values(student)
console.log(valu);
// for in valu
for(let value in student){
    console.log("Display value",student[value]);
}

// print keys & value both
for(let bo in student){
    console.log(bo,"===>>",student[bo]);
}

let co =0
for(let count in student){
    co++
}
console.log(co);

// key cheak
let keyChek = student.hasOwnProperty("email")
  console.log(keyChek)

// with function
let studentin = {
  name: 'Azaan',
  age: 26,
  university: 'DIU',
  department: 'CSE',
}

function isObject(obj) {
  // price keys
  for (let key in obj) {
    console.log('key', key);
  }


  // print value
  for (let vale in obj) {
    console.log('value', obj[vale]);
  }


  // print both
  for (let vale in obj) {
    console.log('keys=>', vale, 'value=>', obj[vale]);
  }


  // count keys
  let cot = 0;
  for (let con in studentin) {
    cot++;
  }
  console.log('Total count ==>', cot);


  // alternativ
  let Objcount = Object.keys(studentin).length
  console.log("Alternativ way total count keys",Objcount);


  //email cheak
  let emailCheker = studentin.hasOwnProperty("email")
  console.log("Result is =>",emailCheker);
}
isObject(studentin);
