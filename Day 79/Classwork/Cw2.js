const divs = document.getElementsByClassName("box");

for (let i = 0; i < divs.length; i++) {
    const div = divs[i];
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = "skyblue";
    div.style.borderRadius = "20px";
    div.style.position = "relative";

    let pos = 0;
    setInterval(() => {
        pos += 1;
        div.style.left = pos + "px";
    }, 10);
}