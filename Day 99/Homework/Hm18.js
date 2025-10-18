const users = [
    { name: "Ana", isActive: false },
    { name: "Gio", isActive: true },
    { name: "Nika", isActive: false },
    { name: "Lika", isActive: true }
];

const lastIndex = users.findLastIndex(user => user.isActive === true);

console.log(lastIndex);
