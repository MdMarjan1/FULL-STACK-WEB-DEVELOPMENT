interface andType {
    present: boolean,
    status: string,
    
}
export default function Polixei({present, status}:andType){
    return present === true && <li>Bangladeshi {status}</li>
}