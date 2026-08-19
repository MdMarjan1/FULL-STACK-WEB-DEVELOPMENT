"use strict";
const akbor = {
    name: "marjan",
    role: 456,
    depertment: "science",
    salary: 4569877,
};
const mark = {
    name: "mark",
    role: 456,
    depertment: "science",
    salary: 4569877,
};
const devit = {
    name: "devit",
    role: 456,
    depertment: "science",
    salary: 4569877,
};
const employe1 = [
    {
        name: "devit",
        role: 456,
        depertment: "science",
        salary: 4569877,
    },
];
function isPrintUser(worker) {
    console.log(`name is ${worker.name}`);
    console.log(`role number ${worker.role}`);
    console.log(`depertment num ${worker.depertment}`);
    console.log(`selery ${worker.salary}`);
}
isPrintUser({ name: 'amjad', role: 56, depertment: 'science' });
function displayUser({ name, role, depertment }) {
    console.log(`name is ${name}`);
    console.log(`role number ${role}`);
    console.log(`depertment num ${depertment}`);
}
displayUser({ name: 'amjad', role: 56, depertment: 'science' });
