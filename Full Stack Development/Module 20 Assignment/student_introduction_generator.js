const studentIntroduction = (student) => {
  if ( null === student || typeof student !== "object" || Object.keys(student).length === 0 || Array.isArray(student)){
    return `Invalid`;
  }

  const key = Object.keys(student)
  if(!key.includes("name") || !key.includes("age") || !key.includes("course")){
    return "Invalid"
  }

  const {name, age, course} = student
  return `My name is ${name}. I am ${age} years old. I am learning ${course}.`
};



let studentinfo = {name:"Rafi",age:18,course:"JavaScript"};
console.log(studentIntroduction(studentinfo));

console.log(studentIntroduction(undefined));
console.log(studentIntroduction([]));
console.log(studentIntroduction("hello"));
console.log(studentIntroduction(123));
console.log(studentIntroduction({name: "rafi", age: 20, course: "CS"}) );
console.log(studentIntroduction({name: "rafi", age: 20}));
console.log(studentIntroduction(null));







