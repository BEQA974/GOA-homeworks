const h1s = document.getElementsByTagName("h1");
const h3s = document.getElementsByTagName("h3");

for (let i = 0; i < h1s.length; i++) {
    h1s[i].style.color = "green";
    h1s[i].style.border = "1px solid black";
    h1s[i].style.fontSize = "30px";
}

for (let i = 0; i < h3s.length; i++) {
    h3s[i].style.color = "green";
    h3s[i].style.border = "1px solid black";
    h3s[i].style.fontSize = "24px";
}