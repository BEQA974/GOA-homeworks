function printObject(obj) {
    for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
    }
}

const person = {
    name: "Beqa",
    age: 15,
    city: "Tbilisi",
    hobby: "Coding",
};

printObject(person);
