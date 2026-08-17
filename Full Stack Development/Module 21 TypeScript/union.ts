function text(texrate: number | string, amount:number):number{
    if( typeof texrate === 'string' ){
        texrate = parseFloat(texrate)
    }
    return texrate * amount
}

let money = text(45, 496)
console.log(money);


// null

let definiteNull: number | null =  null;
console.log(definiteNull);

// undefinite
let noIs: number | undefined; 
