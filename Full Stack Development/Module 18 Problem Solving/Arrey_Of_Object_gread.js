const GreadObject = (students) =>{
    const realStudentObject = students.map((student)=>{
        const {name, marks} = student
        let newGread = {name, marks};
        if(marks >= 90){
            newGread.gread = 'A+';
        }
        else if(marks >= 80){
            newGread.gread = "A";
        }
        else if(marks >= 60){
            newGread.gread = "B";
        }
        else{
            newGread.gread = "Fail";
        }
        return newGread
    })
    return realStudentObject
     
} 





console.log(GreadObject([
   {name: "marjan", marks: 45},
   {name: "Aziz", marks: 85}
]));