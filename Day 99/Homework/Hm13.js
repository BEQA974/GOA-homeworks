const users = [
    { name: "Ana", age: 30 },
    { name: "Gio", age: 20 },
    { name: "Nika", age: 24 },
    { name: "Lika", age: 28 }
];

const lastUser = users.findLast(user => user.age < 25);

console.log(lastUser);
