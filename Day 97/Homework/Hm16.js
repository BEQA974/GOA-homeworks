const students = [
    {name: "student1", score: 40},
    {name: "student2", score: 50},
    {name: "student3", score: 10}
];

const allPassed = students.every(student => student.score >= 50);
console.log(allPassed); 
