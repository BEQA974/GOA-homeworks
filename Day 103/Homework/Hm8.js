    function generateColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

    const rgb = `rgb(${r}, ${g}, ${b})`;

    document.getElementById("color").textContent = rgb;
    document.body.style.backgroundColor = rgb; 
    }