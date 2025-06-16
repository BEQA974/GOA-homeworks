function addNewElement(){
    let ul =document.getElementById("main-ul")

    let li1 = document.createElement("li")
    li1.textContent = "TU TU TU"
    ul.appendChild(li1)

    let li2 = document.createElement("li")
    li2.textContent = "PU PU PU"
    ul.appendChild(li2)

    let li3 = document.createElement("li")
    li3.textContent = "RU RU RU"
    ul.appendChild(li3)
}
addNewElement()