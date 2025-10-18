const students = [
    { name: "Ana", grade: "B" },
    { name: "Gio", grade: "C" },
    { name: "Nika", grade: "A" },
    { name: "Lika", grade: "A" }
];

const firstStudentA = students.find(student => student.grade === "A");

console.log(firstStudentA);
