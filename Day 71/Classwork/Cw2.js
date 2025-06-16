let num1 = parseInt(prompt("შეიყვანე რიცხვი 1-დან 100-მდე:"));
let random1 = Math.round(Math.random() * 100);

if (num1 > random1) {
    console.log("მეტია");
} else if (num1 < random1) {
    console.log("ნაკლებია");
} else {
    alert("გილოცავ!");
}
