const id ={
    name: "MARJAN",
    class: "Bussiness",
    role: 450,
    home:{
        location: "Donia"
    }
}
for(let i in id){
    // console.log(i);
    console.log(i, id[i]);
}

// ================================

const kok = {
    named: "MARJAN",
    classd: "Bussiness",
    roled: 450,
}
const key = Object.keys(kok)
for(let o of key){
    console.log(o, kok[o]);
}
