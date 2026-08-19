let value : unknown;

let myvalue = value as string;
const uppi =  myvalue.toUpperCase

let myNumber = value as number;
const Nummer = myNumber.toFixed(2);


let data: unknown;
interface Users {
    name: string,
    role: number
}

const UserData = data as Users;
UserData.role


const Wasim: Users = {
    name: "akram",
    role: 456
} as const;

// Wasim.name = 'rabbi'
