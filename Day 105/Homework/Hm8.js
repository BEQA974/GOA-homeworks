function x (obj){
    return Object.values(obj).filter(values => typeof values === "number");
}


const person = {
    name: "Beqa",
    age: 16,
    city: "Tbilisi",
    hobby: "coding",
    school: "Public School"
};

console.log(x(person));