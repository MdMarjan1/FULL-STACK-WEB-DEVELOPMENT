const mainNumber = (num) =>{
    const newNumber = [...num]
    const sorting = newNumber.sort((a,b) =>{
        return b-a
    })
    return sorting
}

console.log(mainNumber([1, 25, 90, 3, 15]));