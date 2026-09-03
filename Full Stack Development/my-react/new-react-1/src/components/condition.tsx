interface result{
    name: string,
    isValue: boolean,
}

export default function Tasks({name, isValue}:result){
     if(isValue === true){
        return <h1>exam pass: {name}</h1>
    }
    else{
        return <h1>exam fail: {name}</h1>
    }
}