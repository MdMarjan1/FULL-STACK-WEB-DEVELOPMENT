let toto = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const total = toto.reduce((acomulate, current)=>{
     return acomulate+= current
},0)
console.log(total);