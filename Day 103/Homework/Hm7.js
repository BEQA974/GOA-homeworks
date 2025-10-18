    let time = 0;

    function start() {
    time = Date.now(); 
    }

    function stop() {
    let diff = Math.floor((Date.now() - time) / 1000);
    document.getElementById("result").textContent = diff + " წამი გავიდა";
    }