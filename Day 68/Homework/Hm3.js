let num1 = prompt("შეიყვანე პირველი რიცხვი:");
let num2 = prompt("შეიყვანე მეორე რიცხვი:");

// ვაქცევთ სტრინგებს რიცხვებად
num1 = Number(num1);
num2 = Number(num2);

if (num1 > num2) {
    alert("პირველი რიცხვი მეტია მეორეზე.");
} else if (num1 < num2) {
    alert("მეორე რიცხვი მეტია პირველზე.");
} else {
    alert("ორივე რიცხვი ტოლია.");
}