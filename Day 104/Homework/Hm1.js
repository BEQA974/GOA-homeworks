    class Student {
    constructor(name, age, group) {
        this.name = name;
        this.age = age;
        this.group = group;
    }
    }

    const form = document.getElementById("studentForm");
    const studentList = document.getElementById("studentList");
    const students = [];

    form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const group = document.getElementById("group").value;

    const student = new Student(name, age, group);
    students.push(student);
    renderStudents();

    form.reset();
    });

    function renderStudents() {
    studentList.innerHTML = "";
    students.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.group}</td>
        <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
        `;
        studentList.appendChild(row);
    });
    }

    function deleteStudent(index) {
    students.splice(index, 1);
    renderStudents();
    }

    class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    introduce() {
        return `Hello, I am ${this.name} and I teach ${this.subject}.`;
    }
    }

    class Phone {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    ring() {
        return `The ${this.brand} ${this.model} is ringing!`;
    }
    }

    class Movie {
    constructor(title, year) {
        this.title = title;
        this.year = year;
    }
    play() {
        return `Now playing: ${this.title} (${this.year})`;
    }
    }

    class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    meow() {
        return `${this.name} the ${this.color} cat says Meow!`;
    }
    }

    class BankCard {
    constructor(cardNumber, balance) {
        this.cardNumber = cardNumber;
        this.balance = balance;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
        this.balance -= amount;
        return `Withdrawal successful! New balance: ${this.balance}₾`;
        } else {
        return "Insufficient funds!";
        }
    }
    }

