function showFullName(event) {
    event.preventDefault();
    const first = document.getElementById("firstName").value;
    const last = document.getElementById("lastName").value;
    document.getElementById("fullNameDisplay").textContent = first + " " + last;
    event.target.reset();
}
