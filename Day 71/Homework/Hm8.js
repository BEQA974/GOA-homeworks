let userInput = prompt("შეიყვანეთ დეციმალური რიცხვი:");

let num = parseFloat(userInput);

if (isNaN(num)) {
    alert("გთხოვთ შეიყვანოთ სწორი რიცხვი.");
} else {
    alert("დაცემული რიცხვია: " + num);
    alert("დაბლა დაკრგვა (Math.floor): " + Math.floor(num));
    alert("ზემოთ დაკრგვა (Math.ceil): " + Math.ceil(num));
    alert("ახლოს მიახლოებული მთელ რიცხვი (Math.round): " + Math.round(num));
}
