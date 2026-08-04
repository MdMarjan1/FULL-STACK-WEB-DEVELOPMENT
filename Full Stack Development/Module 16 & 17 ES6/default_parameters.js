// default Parameters function
function isName(name = "guest"){
    return "hallo "+name;
}
console.log(isName("hasib"));
console.log(isName());
console.log(isName("trina"));

// =====================================

function greet(roll="000"){
    return `Hello, ${roll}`;
}
console.log(greet(79));
console.log(greet());

// =====================================

function isCaffe(suger=1){
    return `Hot coffee ${suger} spoon suger`;
}
console.log(isCaffe(5));
console.log(isCaffe());

// =====================================

function isStudent(name="UNKNOW STUDENT", role=1){
    return `Student Name=> ${name} role=> ${role}`;
}
console.log(isStudent("Robin","101"));
console.log(isStudent());

// =====================================

function houseTax(rent, tax=500){
    return `Rent = ${rent} tex = ${tax}`
}
console.log(houseTax(5000,100));
console.log(houseTax(100,20));
console.log(houseTax(25312));