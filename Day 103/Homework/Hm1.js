 let randomSecond = Math.floor(Math.random() * 60);

    function update() {
    let now = new Date();
    let sec = now.getSeconds();

    document.getElementById("time").textContent = now.toLocaleTimeString();

    if (sec === randomSecond) {
        document.getElementById("msg").textContent = "<3";
    }
    }

    setInterval(update, 1000);
    update();