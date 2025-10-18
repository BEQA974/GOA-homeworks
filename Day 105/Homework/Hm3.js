function uppercaseKeys (obj){
    return Object.keys(obj).map(key => key.toUpperCase());
}


const person = {
    name: "Beqa",
    age: 16,
    city: "Tbilisi",
    hobby: "coding",
    school: "Public School"
};

console.log(uppercaseKeys(person));