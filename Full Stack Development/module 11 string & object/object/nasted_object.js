// Nasted Object
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
console.log(Collage);
console.log(Collage.subject);
console.log(Collage['tacher']['name']);
console.log(Collage.tacher['skills']['color']);
console.log(Collage.tacher['skills']['color'][1]);


// object.entries
console.log(Object.entries(Collage));