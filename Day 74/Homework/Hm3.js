let div = document.getElementById("div-main");

div.addEventListener("click", function() {
    if (div.style.background === "red") {
        div.style.background = "blue";
    } else {
        div.style.background = "red";
    }
});