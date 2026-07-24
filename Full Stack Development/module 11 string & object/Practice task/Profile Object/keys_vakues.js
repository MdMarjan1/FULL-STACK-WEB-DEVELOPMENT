let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
let keys = Object.keys(book)
for (let key of keys) {
    console.log(key);
}
//  1
let keyss = Object.keys(book)
console.log(keyss);
// 2
let allData = Object.entries(book)
console.log(allData);
// 3
delete book.pages
console.log(book);
// 4
let values = Object.values(book)
console.log(values);
