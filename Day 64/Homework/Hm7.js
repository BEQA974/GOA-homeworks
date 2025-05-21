    function changeBackground(e) {
    e.preventDefault(); 

    const color = document.getElementById("bgColor").value;
    document.body.style.backgroundColor = color;
    }