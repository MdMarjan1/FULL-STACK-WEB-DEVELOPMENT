const describeDeclaration = (name) =>{
    if(name === "int" ){
        return `Invalid`
    }
    else if(name === "let"){
        return `Cannot redeclare, can reassign`
    }
    else if(name === "const"){
        return `Cannot redeclare, cannot reassign`
    }
    else if(name === "var"){
        return `Can redeclare, can reassign`
    }
    else{
        return `Invalid`
    }
}
console.log(describeDeclaration('let'));
console.log(describeDeclaration('const'));
console.log(describeDeclaration('var'));
console.log(describeDeclaration('let'));