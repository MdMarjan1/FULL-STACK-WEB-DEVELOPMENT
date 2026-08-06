let status = "Oder Placed"  // global scope
for(let i=1; i<=3; i++){
    let status = "Processing Item"+i // block scope
    console.log(status);
}
console.log(status);