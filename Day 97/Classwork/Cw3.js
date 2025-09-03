function allActive(arr) {
    return arr.every(item => item.status === "active");
}

const users1 = [
    { name: "Ana", status: "active" },
    { name: "Nika", status: "active" },
    { name: "Luka", status: "active" }
];

const users2 = [
    { name: "Ana", status: "active" },
    { name: "Nika", status: "inactive" },
    { name: "Luka", status: "active" }
];

console.log(allActive(users1)); 
console.log(allActive(users2)); 