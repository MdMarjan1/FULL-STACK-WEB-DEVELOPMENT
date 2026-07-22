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


// ------------------------------------
//13
let x1 = [1, 2, 3, 4, 5]
let x2 = [6, 7, 8, 9, 10]
let x3 = x1.concat(x2)
console.log(x3);

// ------------------------------------
//14
let x4 = [11, 22, 33, 45, 66, 78, 89, 99]
let x5 =x4.slice(1,4)
console.log(x5);

// ------------------------------------
//15
let x6 = ['jam', 'mango', 'orange', 'banana', 'malta']
let x7 = x6.join(' ')
console.log(x7);

// ------------------------------------
//16
let x8 = ['am', 'jm', 'ko', 'gf', 'bf']
let x9 = Array.isArray(x8)
let x10 = Array.isArray('jm')
console.log(x9);
console.log(x10);

// ------------------------------------
//17
let x11 = [11, 22, 33, 45, 66, 78, 89, 99]
x11.reverse()
console.log(x11);

// ------------------------------------
//18
let x12 = ['jam', 'mango', 'orange', 'banana', 'malta']
x12.sort()
console.log(x12);

// ------------------------------------
//19
let x13 = [11, 24, 10, 5, 55, 2, 64]
for(let a=0; a<x13.length; a++){
    if(x13[a] >10 ){
        console.log(x13[a]);
    }
}

// ------------------------------------
//20
let x14 = [10, 12, 13, 15, 17, 18]
let sum = 0
for(let b=0; b<x14.length; b++){
    sum+=x14[b]
}
console.log(sum,'Arrey Sum'); //85