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
console.log(Collage.tacher.skills.color);
console.log(Collage['tacher']);