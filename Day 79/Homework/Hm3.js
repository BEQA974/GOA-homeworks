const images = document.getElementsByTagName("img");

for (let i = 0; i < images.length; i++) {
    images[i].style.width = "200px";
    images[i].style.borderRadius = "10px";
    images[i].style.border = "3px solid transparent";

    if (images[i].alt.toLowerCase().includes("cat")) {
    images[i].style.borderColor = "orange";
}
}