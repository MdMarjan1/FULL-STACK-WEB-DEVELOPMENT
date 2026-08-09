const findUserId = (users, id) =>{
    const cheaKid = users.find((user)=>{
      return  user.id === id
    })
    return cheaKid
}


let users = [
    {id:14, name: "rafi"},
    {id:456, name: "Proma"},
    {id:45, name: "shawon"}
]

console.log(findUserId(users,14));
console.log(findUserId(users,456));