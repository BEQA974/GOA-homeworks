function addNewElement() {
    let div = document.getElementById("main-div");
    let p = document.createElement("p");
    p.textContent = "Hello";

    div.appendChild(p);
}
addNewElement();
