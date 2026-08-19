"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const robin = {
    name: "marjan",
    role: 56,
    id: 45,
    Group: "Science",
};
const rakib = {
    name: "opod",
    role: 56,
    id: 45,
    // Group: "Arts"
};
// object use must be interface
function printAllStudent(student) {
    console.log(`name: ${student.name}`);
    console.log(`role: ${student.role}`);
    console.log(`Id: ${student.id}`);
}
console.log(printAllStudent({ name: 'marjan', role: 56, id: 47 }));
function printAllStudent12({ name, role, id }) {
    console.log(`name: ${name}`);
    console.log(`role: ${role}`);
    console.log(`Id: ${id}`);
}
console.log(printAllStudent12({ name: 'marjan', role: 56, id: 47 }));
//# sourceMappingURL=interface.js.map