for (let i = 1; i <= 5; i++) {
  console.log(i, 'Hello');
}

let a = 1;
while (a <= 5) {
  console.log(a, 'Hallo');
  a++;
}

//-------------------------------------

for(let s=1; s<=10; s++){
  console.log(s);
}

//-------------------------------------

let w = 10
while(w>=1){
  console.log(w);
  w--
}
//-------------------------------------

let rp = 1
while(rp<=7){
  console.log(rp,'Loop চলছে');
  rp++
}

//-------------------------------------

for(let even=1; even<=30; even++){
  if(even%2==0){
    console.log(even);
  }
}

//-------------------------------------

let sum = 0
for(let p=1; p<=20; p++){
  sum+=p
}
console.log(sum);

//-------------------------------------

let ml = 7
for(let t=1; t<=10; t++){
  console.log(ml,'*',t,'=',ml*t);
}

//-------------------------------------

for(let d=20; d>=1; d--){
  console.log(d);
}

//-------------------------------------

let sus = 0
for(let x=2; x<=50; x++){
  if(x%2==0){
    sus+=x
  }
}
console.log(sus);

//-------------------------------------

for(let h=1; h<=50; h++){
  if(h>30){
    break;
  }
  console.log(h);
}

//-------------------------------------

for(let k=1; k<=20; k++){
  if(k%4==0){
    continue
  }
  console.log(k);
}

//-------------------------------------

let v=1
do{
  console.log(v);
  v++
}while(v<=5)

let vg=1
do{
  console.log(vg);
  vg++
}while(vg>10)

//-------------------------------------

// foor loop
for(let i=1; i<=5; i++){
  console.log('forloop',i);
}

// while loop
let q=1
while(q<=5){
  console.log('whileLoop',q);
  q++
}

// do whileLoop
let u=1
do{
  console.log('Do while loop',u);
  u++
}while(u<=5)

//-------------------------------------

for(let c=1; c<=100; c++){
  if(c%5==0){
    continue
  }
  if(c>40){
    break
  }
  console.log(c);
}
