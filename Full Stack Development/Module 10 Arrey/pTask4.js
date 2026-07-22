//1
let tri = ['Mango', 'Banana', 'Orange']
console.log(tri);

// ------------------------------------
//2
let jo = [12, 14, 16, 22, 69, 78, 45]
console.log(jo.length); // 7

// ------------------------------------
//3
let jh = [11,22,33,44,55,66,77]
console.log(jh[0], jh[2]);

// ------------------------------------
//4
let nu = ['Mango', 'Banana', 'Orange', 'jeckfruit']
nu[1]='Malta';
console.log(nu);

// ------------------------------------
//5
let gh = [11, 22, 33, 44, 55]
gh.push(66)
console.log(gh);

// ------------------------------------
//6
let gt = [11, 22, 33, 44, 55]
let removeValue=gt.pop()
console.log(gt);
console.log(removeValue);

// ------------------------------------
//7
let bb = [11, 22, 33, 44, 55]
let addNew = bb.unshift(99)
console.log(bb);

// ------------------------------------
//8
let ba = [11, 22, 33, 44, 55]
let re = ba.shift()
console.log(ba);
console.log(re);

// ------------------------------------
//9
let cha = ['mango', 'amjad', 'max', 'davit', 'saedie sink']
let fox = cha.includes('max')
console.log(fox);

// ------------------------------------
//10
let vv = ['mango', 'amjad', 'max', 'davit', 'saedie sink']
let cc = vv.indexOf('davit')
console.log(cc);

// ------------------------------------
//11
let lox =  ['mango', 'amjad', 'max', 'davit', 'saedie sink', 'anade armas']

for(let i=0; i<lox.length; i++){
    console.log(lox[i]);
}

// ------------------------------------
//12
let box =  ['mango', 'amjad', 'max', 'davit', 'saedie sink', 'anade armas']

let s = 0
while(s<box.length){
    console.log(box[s]);
    s++
}