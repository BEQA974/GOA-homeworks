const inputs = document.querySelectorAll('input[type="text"]');

inputs.forEach(input => {
    input.addEventListener("input", () => {
    input.style.backgroundColor = input.value.length > 20 ? "red" : "white";
});
});