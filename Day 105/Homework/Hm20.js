const person = {
    name: "Beqa",
    age: 15,
    city: "Tbilisi"
};

delete person.city;

console.log(person.city); 
console.log(Object.hasOwn(person, "city")); 