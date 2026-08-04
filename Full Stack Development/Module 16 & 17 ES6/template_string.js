let app1 =` my name is Usman
 i read in class 6
 i am German
 i love USA`

console.log(app1);

// ================================


let x = "Ovama"
let y = "Trump"

let z = `Frist name ${x} & Second name ${y}`
console.log(z);

// ================================

let name = "Owker"
let pis = 20
let price = 500
console.log(`hallo ${name}. Your bill is ${pis*price}`);

// ================================

function paymentConformation(name='student', bill=0){ 
    let msg = `student name ${name}. 
               your payment successful ${bill} done
               now give tour admit card`;
    return msg
}
console.log(paymentConformation("Marjan", 2500));
console.log(paymentConformation());
console.log(paymentConformation("Riad"));

/*
 if you dont set value in defualt peremater you can use variable under ${name ||"student"} this type code
*/

// ================================

