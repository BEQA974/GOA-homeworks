const items = document.getElementsByTagName("li");

for (let i = 0; i < items.length; i++) {
    if (items[i].textContent.length > 10) {
        items[i].style.backgroundColor = "lightpink";
    } else {
        items[i].style.backgroundColor = "lightgreen";
    }
}