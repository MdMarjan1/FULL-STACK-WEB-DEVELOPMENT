// // spread Operator (...variable)
// let numbers = [10, 500, 100, 125, 350, 60, 20, 80, 2000]
// let maxNUmber = Math.max(...numbers)
// console.log(maxNUmber);

// // ================================

// let num = [10, 500, 100, 125, 350, 60, 20, 80, 2000]
// let minNumber = Math.min(...num)
// console.log(minNumber);

// // ================================

// let dd = [10, 500, 100, 125, 350, 60, 20, 80, 2000]
// console.log(...dd);

// // ================================

// // copy arrey
// let a1 = [500, 100, 125, 350, 60, 20, 80]
// let a2 = a1

// a1.push(6969)
// console.log("ans",a1);
// console.log("answer",a2);

// // use spread operator
// let x1 = [10, 20, 30, 40, 50, 60, 700]
// console.log(x1)

// let x2 = [...x1, 50005, 6006]
// x1.push(45000)

// console.log("x2",x2);
// console.log("x1",x1);


// Object
let student = {
    name: "Marjan",
    role: 56
}

let Student2 = {...student};
student.Group = "Science";
console.log("answer",Student2);
console.log("ans",student);

// ================================

function suM(a,b,c,...restNUmmer){
    let sum = 0
    for(let num of restNUmmer){
        sum+=num
    }
      return a+b+c+sum;

}
console.log(suM(10, 20, 30, 40, 50, 60, 70, 80, 90));
