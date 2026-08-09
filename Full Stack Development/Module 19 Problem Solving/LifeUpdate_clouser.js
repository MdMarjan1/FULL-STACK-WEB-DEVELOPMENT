const CreateLifeCounter = () =>{
    let life = 3

    return () =>{
        if(life > 0){
            life--
        }
        return life
    }
}
const oldLife = CreateLifeCounter()
console.log(oldLife());

console.log(oldLife());

console.log(oldLife());

console.log(oldLife());

console.log(oldLife());


const sajid = CreateLifeCounter();
console.log(sajid());

