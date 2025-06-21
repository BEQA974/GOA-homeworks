let a = document.getElementById("a-main")

a.addEventListener("pointerover",function(e){
    console.log(e.target)
    console.log(e.target.id)
    console.log(e.target.style)
    console.log(e.target.href)
})