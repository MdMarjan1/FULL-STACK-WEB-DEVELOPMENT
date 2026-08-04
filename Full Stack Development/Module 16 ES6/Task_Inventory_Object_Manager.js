const manageInventoryObject = (obj, action) =>{
    if(action === "keys"){
        const key = Object.keys(obj)
        return key;
    }
    else if(action === "values"){
        const value = Object.values(obj)
        return value;
    }
    else if(action === "entries"){
        const entrie = Object.entries(obj)
        return entrie;
    }
    else if(action.startsWith("delete:")){
        let dev = action.split(":")
        let onedex = dev[1]
        let remove = delete obj[onedex]
        return obj

    }
    else if(action === "seal"){
        let seals = Object.seal(obj)
        return seals
    }
    else if(action === "freeze"){
        let frez = Object.freeze(obj)
        return frez;
    }
    else{
       return `Invalid`
    }
}

console.log(manageInventoryObject({a:1,b:2,c:3}, "keys"));
console.log(manageInventoryObject({a:1,b:2,c:3}, "entries"));
console.log(manageInventoryObject({a:1,b:2,c:3}, "delete:b"));
console.log(manageInventoryObject({a:1}, "shrink"));