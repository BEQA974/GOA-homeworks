function changeElements() {

    let input = document.getElementById("myInput");
    console.log("შეყვანილი ტექსტი:", input.value);

    let button = document.getElementById("myButton");
    button.style.backgroundColor = "black";
    button.style.color = "white";

    let title = document.getElementById("title");
    title.style.textAlign = "center";

    document.body.style.backgroundColor = "green";
}
