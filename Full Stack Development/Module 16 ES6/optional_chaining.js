let Collage ={
    class: 12,
    subject: 'Science',
    shift: 'Morning',
    tacher: {
        name: 'Selim khan',
        age: 59,
        skills:{
            sub: 'Arts',
            language: 'english',
            color: ['black', 'Orange', 'Blue', 'Red']
        }
    }
}

let Collage2 ={
    class: 12,
    subject: 'Science',
    shift: 'Evening',
    tacher: {
        name: 'Roshid',
        age: 59,
    }
}

console.log(Collage?.tacher?.skills?.sub,  Collage2?.tacher?.name);
console.log(Collage?.tacher?.skills?.sub,  Collage2?.tacher?.color);