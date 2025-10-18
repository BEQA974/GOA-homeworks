    function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";

    for (let i = 0; i < 8; i++) {
        let index = Math.floor(Math.random() * chars.length);
        password += chars[index];
    }

    document.getElementById("password").textContent = "პაროლი: " + password;
    }