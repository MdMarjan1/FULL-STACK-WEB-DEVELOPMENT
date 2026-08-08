let user1 = {
    name: "marjan",
    role: 56,
    addess:{
        city: "Naria"
    }
}

let user2 = {
    name: "TinTin",
    role: 71
}

const getCity = (user) =>{
    return user.addess?.city;
}
console.log(getCity(user1));
console.log(getCity(user2));