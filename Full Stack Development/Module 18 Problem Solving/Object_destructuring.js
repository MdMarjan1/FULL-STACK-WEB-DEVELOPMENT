const responseExtractor = (Object1) =>{
    const  {user:{name:UserName, age=18}} = Object1; // Nasted destructuring
    return {UserName, age};

};
console.log(responseExtractor({user: {name:"Rafi", age:22}}));
console.log(responseExtractor({user: {name: "Amjad"}}));