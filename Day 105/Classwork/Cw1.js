function hasOwn(obj, key) {
    return obj.hasOwnProperty(key);
}

let car = {brand: "Toyota", model: "Rav-4"};
let person = {name: "Beqa", age: 16};
let book = {title: "Titanic", author: "vixaca"};

console.log(hasOwn(car, "brand"));    
console.log(hasOwn(car, "year"));     

console.log(hasOwn(person, "name"));  
console.log(hasOwn(person, "height"));

console.log(hasOwn(book, "author")); 
console.log(hasOwn(book, "pages")); 