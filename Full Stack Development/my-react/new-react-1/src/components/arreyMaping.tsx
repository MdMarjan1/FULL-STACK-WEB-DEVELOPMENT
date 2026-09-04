interface bookProps{
    name: string,
}
export default function Book({name}:bookProps){
    return (
        <li>Book name: {name}</li>
    )
}