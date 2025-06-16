function addNewElement() {
    let div = document.getElementById("main-div");
    let h1 = document.createElement("h1");
    h1.textContent = "TEXT";

    div.appendChild(h1);
}
addNewElement();
