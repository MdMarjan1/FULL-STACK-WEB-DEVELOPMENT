const filterActiveUsers = (users) =>{
    if(!Array.isArray(users) || users.length === 0){
        return "Invalid"
    }

    for(let user of users){
        const key = Object.keys(user)
        if(!key.includes("isActive")){
            return "Invalid"
        }
    }

    const cheakActiceUser = users.filter(user=> user.isActive === true)
    return cheakActiceUser
}


let socialUser = [{name:"A", isActive:true},
                    {name:"B", isActive:false}]
console.log(filterActiveUsers(socialUser));

