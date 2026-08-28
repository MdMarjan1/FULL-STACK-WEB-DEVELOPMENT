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
