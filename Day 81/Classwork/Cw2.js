let myObj = {
    name: "David",
    surname: "Tezelashvili",
    academy: "GOA",
    isMentor: true,
    num: 100,
    hobbies: ["programming", "bike", "basketball"],
    favColor: "Blue"
};

    let ul = document.getElementById("myList");

for (let key in myObj) {
    let li1 = document.createElement("li");
li1.textContent = key;

let li2 = document.createElement("li");
li2.textContent = myObj[key];

ul.appendChild(li1);
ul.appendChild(li2);
}