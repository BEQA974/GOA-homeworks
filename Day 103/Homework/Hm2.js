const dice = [1, 2, 3, 4, 5, 6];

    function rollDice() {
      let index = Math.floor(Math.random() * dice.length);
    let value = dice[index];

    document.getElementById("result").textContent = "გამოვიდა: " + value;
    }