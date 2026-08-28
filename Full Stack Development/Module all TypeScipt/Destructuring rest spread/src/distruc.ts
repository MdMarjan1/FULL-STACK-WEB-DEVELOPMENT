type Student = {
  name: string;
  roll: number;
  group: string;
};

const student: Student = {
  name: "marjan",
  roll: 56,
  group: "science"
};

const { name, roll, group } = student;

console.log(name, roll, group);


const userInfo = ['Miner', 56, true]
const [name1, number, answer] = userInfo
console.log(name1, number, answer);
