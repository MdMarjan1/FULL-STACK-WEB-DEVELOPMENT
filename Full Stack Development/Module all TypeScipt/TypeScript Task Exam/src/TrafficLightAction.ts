type Valu = "red" | "yellow" | "green"
const getTrafficAction = (light: Valu):string =>{
    if(light === "red"){
        return `Stop`;
    }
    else if(light === "yellow"){
        return `Slow Down`;
    }
    else if(light === "green"){
        return `Go`
    }

    return `Invalid`
}

console.log(getTrafficAction("red"));
console.log(getTrafficAction("yellow"));
console.log(getTrafficAction("green"));

