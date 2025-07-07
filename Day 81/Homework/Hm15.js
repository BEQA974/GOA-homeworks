let obj = {
    name: "ბექა",
    age: 15,
    city: "თბილისი"
};

let keysList = "";

for (let key in obj) {
    keysList += key + ", ";
}

keysList = keysList.slice(0, -2); 

console.log("Key-ები: " + keysList);