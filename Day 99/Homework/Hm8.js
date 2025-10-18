const users = [
    { name: "Ana", isActive: false },
    { name: "Gio", isActive: false },
    { name: "Nika", isActive: true },
    { name: "Lika", isActive: true }
];

const index = users.findIndex(user => user.isActive === true);

console.log(index);
