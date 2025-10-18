function flipCoin() {
    const random = Math.random();
    const result = random < 0.5 ? "არიოლი" : "რეშკა";

    document.getElementById("result").innerText = "მონეტის შედეგი: " + result;

    if (result === "რეშკა") {
        document.body.style.background = "green";
    } else {
        document.body.style.background = "blue";
    }
    }

    document.getElementById("flipBtn").addEventListener("click", flipCoin);

    function showDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString("ka-GE");
    const time = now.toLocaleTimeString("ka-GE");
    document.getElementById("dateTime").innerText = `დღე: ${date} | დრო: ${time}`;
    }

    setInterval(showDateTime, 1000);
    showDateTime(); 
