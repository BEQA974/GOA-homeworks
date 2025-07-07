let div = document.getElementById("myDiv");

for (let i = 1; i <= 5; i++) {
    let p = document.createElement("p");

    p.textContent = "ეს არის პარაგრაფი ნომერი " + i;

    div.appendChild(p);
}