let button = document.getElementById("button-main");
let image = document.getElementById("img-main");

button.addEventListener("click", function() {
if (image.style.display === "none") {
    image.style.display = "block";
} else {
    image.style.display = "none";
}
});
