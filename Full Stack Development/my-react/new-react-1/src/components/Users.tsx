import Usercart from "./Usercart"

interface Use{
    name: string,
    isLogin? : boolean
}

const users: Use[] = [
    {name: "marjan", isLogin:true},
    {name: "omar", isLogin:true},
    {name: "mijan", isLogin:true},
    {name: "masud", isLogin:true},
]

export default function User(){
    return(
        <>
         {
            users.map(usar => <Usercart name= {usar.name} ></Usercart>)
        }
    
        
        
        </>
    )
}