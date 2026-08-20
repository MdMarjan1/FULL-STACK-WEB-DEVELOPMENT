//coustom type
type Student = {
    name: string,
    role: number,
    id: number,
    gender?: string,
    group?: string,
}

const robin: Student = {
    name: 'marjan',
    role: 65,
    id: 1012,
    gender: "male",
    group: "science",
}

const nakib: Student = {
    name: 'marjan',
    role: 65,
    id: 1012,
   
}

const rakib: Student = {
    name: 'marjan',
    role: 65,
    id: 1012,
    gender: "male",
  
}

// console.log(rakib);

// union type
let UserId: string | number | boolean;

let userID1: number | string;


type Student1 = {
    name: string,
    id: string | number
}

const sohel : Student1 = {
    name: "marjan",
    id: 450,
}

const amdad : Student1 = {
    name: "amdad",
    id: "BBC"
}

// ================================

type employe = {
    name: string,
    batch: number | string,
    selery: string | number,
}

const amjad: employe = {
    name: "amjad",
    batch: 256,
    selery: 456321,
}

const wasim: employe = {
    name: "wasim",
    batch: 478,
    selery: 445555,
}

const rifat: employe = {
    name: "rifat",
    batch:464,
    selery: 323232,
} 


// Function-এর parameter-এ Union
const printID = (id: string | number) =>{
    console.log(id);
    
}
printID('marjan1212')

const SprintId = (id: string | number) =>{
    if(typeof id === "string"){
        console.log(id.toUpperCase());
        
    }
    else{
        console.log(id);
        
    }
}

SprintId('marjan');
SprintId(456);

// ================================

type Products = {
    name: string,
    price: number,
    id?: string | number,
    category?: string | number,
}

const salman:Products = {
    name: "salman",
    price: 450,
    id: "lip-564",
    category: "Arts"
}
console.log(salman);


const anmol:Products = {
    name: "salman",
    price: 450,
    id: 45056,
    category: "Arts"
}
console.log(anmol);
// ================================

// Literal Union Type
type UserInfo = "name" | "role" | "id"
const id1: UserInfo = "name";
const id2: UserInfo = "role";
const id3: UserInfo = "id"


// =================================

// Arrey of type
let num : number[] = [626, 646, 4654, 61, 13,6464, 445, 51455]


// Coustom type arrey
type numbers7 = number[]
const aziz: numbers7 = [45, 6464, 464, 6464, 45]

type numbers8 = string[]
const osman: numbers8 = ['mmm', 'ttoot', 'sss']

type tin1 = number[]
const tomal: tin1 = [45, 55, 11, 22, 33, 44, 55]


//Object arrey
type vision ={
    name: string,
    price: number,
    id?: number,
};

const yemal: vision[] = [
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
]


// Union Type + Array
const box1: (string | number)[] = [
    'marjan', 456, 'ama', 655, 4564
]

// type + Union + Array
type id = string | number;
const box3: id[] = [
    'marjan',
    45
]

const box5:id[] = [
    'rabbi',
    5464
]



type isStudent = {
    name: string,
    id: number | string,
    group: "science" | "commerce" | 'arts',
};

const sajid: isStudent[] = [
    {
        name: 'marjan',
        id: 'fg343',
        group: "commerce"
    }
]


type Product = {
    name: string,
    price?: number,
    id: string | number,
    category: "electronics" | "clothing" | "food",
}

const mardia:Product[] = [
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

]

