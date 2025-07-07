let obj = {
    name: "ბექა",
    age: 15,
    city: "თბილისი"
};

let keyToFind = "age";
let exists = false;

for (let key in obj) {
    if (key === keyToFind) {
        exists = true;
        break;
    }
}

if (exists) {
    console.log(`Key '${keyToFind}' არსებობს ობიექტში.`);
} else {
    console.log(`Key '${keyToFind}' არ არსებობს ობიექტში.`);
}