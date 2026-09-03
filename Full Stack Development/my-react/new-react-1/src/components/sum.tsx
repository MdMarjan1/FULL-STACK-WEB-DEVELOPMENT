interface taskinfo {
    name: string,
    age?: string,
}

export default function Sum({name,age}:taskinfo){
    return(
        <>
        <h1 className="text-5xl text-fuchsia-900">Country: {name} Age: {age}</h1>
        </>
    )
}