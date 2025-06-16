function addNewElement() {
    let div = document.getElementById("main-div");
    let img = document.createElement("img");
    img.src = "Image.png"

    div.appendChild(img);
}
addNewElement()