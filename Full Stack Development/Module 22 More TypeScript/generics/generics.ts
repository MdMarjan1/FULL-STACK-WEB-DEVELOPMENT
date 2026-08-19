interface Responce<T> {
    data: T;
    status: number;
}

const treansactionResponce:Responce<string> = {
    data: "marjan",
    status: 655,
}

const transactionStatus: Responce<number> ={
    data: 5555,
    status: 452
}

const transJectionValue : Responce<boolean> ={
    data: true,
    status: 787,
}


function getValue<T>(value: T){
    console.log(value);
    
}
getValue<string>("marjan");
getValue<number>(456123);
getValue<boolean>(true);


function StudentId<T>(value: T):T{
    return value;
}
StudentId<string>("marjan");
StudentId<number>(313);
StudentId<boolean>(true);




function UserInfos<T>(value: T):T{
    return value;
}
const num69 = UserInfos<string>("Marjan");
console.log(num69);




function getHight<T>(arrey: T[]):number{
    return arrey.length
}
const ioi = getHight<number>([45, 56, 66, 48, 966, 100])
console.log(ioi);

