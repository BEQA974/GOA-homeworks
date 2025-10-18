function calcDays() {
    let input = document.getElementById("bday").value; 
    if (!input) {
        document.getElementById("result").textContent = "გთხოვ შეიყვანო თვე-დღე";
        return;
    }

    let now = new Date();
    let thisYear = now.getFullYear();

    let birthday = new Date(thisYear + "-" + input);

    if (birthday < now) {
        birthday.setFullYear(thisYear + 1);
    }

    let diff = birthday - now;
      let days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    document.getElementById("result").textContent =
        "დარჩენილია " + days + " დღე 🎉";
    }