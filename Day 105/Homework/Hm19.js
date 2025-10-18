const person = {
    name: "Beqa",
    age: 16
};

person.city = "Tbilisi";

console.log(Object.hasOwn(person, "city"));  
console.log(Object.hasOwn(person, "name"));  
console.log(Object.hasOwn(person, "toString")); 
