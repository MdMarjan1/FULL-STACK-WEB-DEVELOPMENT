const  extractUserInfo = (socialApp) =>{
    const {user:{name, age}, hobbies:firstHobby} = socialApp // object Destructuring
    if(!name){
        return "Invalid"
    }
  
    const [onedex = "nothing yet"] = firstHobby
    return `${name} (${age}) likes ${onedex}`


}
console.log(extractUserInfo({user:{name:"Sadia",age:22}, hobbies:["reading","coding"]}));
console.log(extractUserInfo({user:{name:"Rafi",age:19}, hobbies:[]}));
