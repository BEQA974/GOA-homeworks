const ul = document.createElement("ul");
document.body.appendChild(ul);

let count = 1;
const interval = setInterval(() => {
    if (count > 10) {
    clearInterval(interval);
    return;
    }
    const li = document.createElement("li");
    li.textContent = `Message ${count}`;
    ul.appendChild(li);
    count++;
}, 2000);
