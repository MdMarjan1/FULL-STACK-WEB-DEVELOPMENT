const getGrade = (mark) =>{
    if(typeof mark != "number"){ // always validation cheak frist
        return `Invalid`
    }

    if(mark >= 90){
        return `A+`
    }
    else if(mark >= 80){
        return `A`
    }
    else if(mark >= 60){
        return `B`
    }
    else{
        return `Fail`
    }
}
console.log(getGrade(55));
console.log(getGrade(95));
console.log(getGrade(65));
console.log(getGrade("marjan"));
console.log(getGrade([]));
console.log(getGrade(null));

// ================================
// use ternery Operator

const getGrade1 = (marks) =>{
    return typeof marks != "number" ? `Invalid` : marks >= 90 ? `A+` : marks >= 80 ? `A` : marks >= 60 ? `B+` : `Fail` 
}
console.log(getGrade1(55));
console.log(getGrade1(95));
console.log(getGrade1(65));
console.log(getGrade1("marjan"));
console.log(getGrade1([]));
console.log(getGrade1(null));