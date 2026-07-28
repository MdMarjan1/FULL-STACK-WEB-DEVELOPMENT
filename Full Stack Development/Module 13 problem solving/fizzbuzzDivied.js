function isBuzz(number){
    for(let i=1; i<=number; i++){
        if(i%5===0 && i%3===0){
            console.log(i,"FIZZBUZZ");
        }else if(i%3===0){
            console.log(i,"FIZZ");
        }else if(i%5===0){
            console.log(i,"BUZZ");
        }
        else{
            console.log(i);
        }
    }
}
isBuzz(7)

isBuzz(12)

isBuzz(15)
