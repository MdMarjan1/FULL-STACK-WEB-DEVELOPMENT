let Collage ={
    class: 12,
    subject: 'Science',
    shift: 'Morning',
    tacher: {
        name: 'Selim khan',
        age: 59,
        skills:{
            'ss ub': 'Arts',
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
        nam_e: 'Roshid',
        age: 59,
    }
}

console.log(Collage?.tacher?.skills?.['ss ub'],  Collage2?.tacher?.nam_e);
console.log(Collage?.tacher?.skills?.['ss ub'],  Collage2?.tacher?.color);