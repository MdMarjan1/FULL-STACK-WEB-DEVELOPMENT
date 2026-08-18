type student ={
    name: string,
    role: number,
    group: string,
}

function isStudents(student: student):string{
    return `My name is ${student.name}. role number${student.role}, group${student.group}`;
}

console.log(isStudents({name: 'marjan', role: 45, group: 'science'}))
