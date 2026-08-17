const getLength = (name1: string, name2:string): string =>{
    if(name1.length > name2.length){
        return name1;
    }
    return name2;
}

let nam = getLength('wasim khan', 'rifat').toUpperCase();
console.log(nam)