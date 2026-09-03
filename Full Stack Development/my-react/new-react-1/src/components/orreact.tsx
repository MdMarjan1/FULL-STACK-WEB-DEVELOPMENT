interface orType {
    present: boolean,
    status1: string,
    
}

export default function Orrop({present, status1}:orType){
    return present === false || <li>{status1}</li>
}