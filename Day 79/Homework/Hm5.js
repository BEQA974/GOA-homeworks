const lis = document.getElementsByTagName("li");

for (let i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = i % 2 === 0 ? "skyblue" : "lightgray";
}