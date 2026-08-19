// object use must be interface
interface Student {
    name: string,
    role: number,
    id: number,
    Group?: string, // ? optional maark
}

const robin: Student = {
    name: "marjan",
    role: 56,
    id: 45,
    Group: "Science",
}


const rakib: Student = {
    name: "opod",
    role: 56,
    id: 45,
    // Group: "Arts"
}



// object use must be interface

function printAllStudent(student: Student): void{
    console.log(`name: ${student.name}`);
    console.log(`role: ${student.role}`);
    console.log(`Id: ${student.id}`);

}
console.log(printAllStudent({name:'marjan', role:56, id:47}));

function printAllStudent12({name, role, id}: Student): void{
    console.log(`name: ${name}`);
    console.log(`role: ${role}`);
    console.log(`Id: ${id}`);
}
console.log(printAllStudent12({name:'marjan', role:56, id:47}));