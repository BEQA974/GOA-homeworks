let person = {
    name: "beqa",
    age: 15,
    country: "Georgia"
};

let count = 0

for (let key in person) {
    count++
}
console.log(count)