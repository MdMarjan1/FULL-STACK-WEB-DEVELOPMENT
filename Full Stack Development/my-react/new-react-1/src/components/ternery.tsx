interface senior{
    truthy : boolean,
    role? : string

}
export default function Terner({truthy, role}:senior){
    return truthy === true ? <h1>good student {role}</h1> : <h1>Bad student {role}</h1>
}