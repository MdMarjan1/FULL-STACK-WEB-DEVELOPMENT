const gerPassingStudents = (students, threshold) => {
  const hisStudent = students.filter((mark) => {
    const { marks } = mark;
    // if (marks >= threshold){
    //   return true;
    // }
    return marks >= threshold // this value provide output true or false
  });
  return hisStudent;
};

let xmMark = [
  { name: 'marjan', marks: 75 },
  { name: 'rafi', marks: 40 },
  { name: 'Riad', marks: 60 },
  { name: 'wasim', marks: 33 },
];

console.log(gerPassingStudents(xmMark, 60));
