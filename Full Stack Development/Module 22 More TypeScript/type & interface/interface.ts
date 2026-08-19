interface uSer {
  name: string;
  role: number;
  depertment: string;
  salary?: number;
}

const akbor: uSer = {
  name: "marjan",
  role: 456,
  depertment: "science",
  salary: 4569877,
};

const mark: uSer = {
  name: "mark",
  role: 456,
  depertment: "science",
  salary: 4569877,
};

const devit: uSer = {
  name: "devit",
  role: 456,
  depertment: "science",
  salary: 4569877,
};





const employe1: uSer[] = [
  {
    name: "devit",
    role: 456,
    depertment: "science",
    salary: 4569877,
  },
];



function isPrintUser(worker: uSer):void{
    console.log(`name is ${worker.name}`);
    console.log(`role number ${worker.role}`);
    console.log(`depertment num ${worker.depertment}`);
    console.log(`selery ${worker.salary}`);
    
}
isPrintUser({name:'amjad', role:56, depertment:'science'})





function displayUser({name,role,depertment}: uSer):void{
    console.log(`name is ${name}`);
    console.log(`role number ${role}`);
    console.log(`depertment num ${depertment}`);
    
}
displayUser({name:'amjad', role:56, depertment:'science'})