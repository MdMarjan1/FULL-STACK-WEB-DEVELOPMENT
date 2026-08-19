"use strict";
const robin = {
    name: 'marjan',
    role: 65,
    id: 1012,
    gender: "male",
    group: "science",
};
const nakib = {
    name: 'marjan',
    role: 65,
    id: 1012,
};
const rakib = {
    name: 'marjan',
    role: 65,
    id: 1012,
    gender: "male",
};
// console.log(rakib);
// union type
let UserId;
let userID1;
const sohel = {
    name: "marjan",
    id: 450,
};
const amdad = {
    name: "amdad",
    id: "BBC"
};
const amjad = {
    name: "amjad",
    batch: 256,
    selery: 456321,
};
const wasim = {
    name: "wasim",
    batch: 478,
    selery: 445555,
};
const rifat = {
    name: "rifat",
    batch: 464,
    selery: 323232,
};
// Function-এর parameter-এ Union
const printID = (id) => {
    console.log(id);
};
printID('marjan1212');
const SprintId = (id) => {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
};
SprintId('marjan');
SprintId(456);
const salman = {
    name: "salman",
    price: 450,
    id: "lip-564",
    category: "Arts"
};
console.log(salman);
const anmol = {
    name: "salman",
    price: 450,
    id: 45056,
    category: "Arts"
};
console.log(anmol);
const id1 = "name";
const id2 = "role";
const id3 = "id";
// =================================
// Arrey of type
let num = [626, 646, 4654, 61, 13, 6464, 445, 51455];
const aziz = [45, 6464, 464, 6464, 45];
const osman = ['mmm', 'ttoot', 'sss'];
const tomal = [45, 55, 11, 22, 33, 44, 55];
const yemal = [
    {
        name: 'opop',
        price: 456,
        id: 6556
    },
    {
        name: 'reno',
        price: 456,
    },
    {
        name: 'lava',
        price: 456,
    }
];
// Union Type + Array
const box1 = [
    'marjan', 456, 'ama', 655, 4564
];
const box3 = [
    'marjan',
    45
];
const box5 = [
    'rabbi',
    5464
];
const sajid = [
    {
        name: 'marjan',
        id: 'fg343',
        group: "commerce"
    }
];
const mardia = [
    {
        name: 'marjan',
        price: 456,
        id: 788,
        category: "food"
    },
    {
        name: 'wasim',
        id: 788,
        category: "food"
    },
    {
        name: 'fahim',
        price: 456,
        id: 788,
        category: "food"
    },
];
