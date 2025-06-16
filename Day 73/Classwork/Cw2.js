function Element(){
    let div =document.getElementById("main-div")

    let button =document.getElementById("main-button")
    div.removeChild(button)

    let p =document.getElementById("main-p")
    let i =document.createElement("main-i")
    let itext =document.createTextNode("HELLO")
    i.appendChild(itext)

    div.replaceChild(i,p)


}
Element()