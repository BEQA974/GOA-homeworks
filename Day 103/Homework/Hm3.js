    const fruits = ["ვაშლი", "მსხალი", "ბანანი", "ატამი"];

    function pickFruit() {
      let index = Math.floor(Math.random() * fruits.length);
    document.getElementById("fruit").textContent = "არჩეულია: " + fruits[index];
    }