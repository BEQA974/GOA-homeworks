function objectToArray(obj) {
    return Object.entries(obj).map(([key, value]) => `${key}=${value}`);
}

const person = {
    name: "Beqa",
    age: 15,
    city: "Tbilisi",
};

console.log(objectToArray(person));
