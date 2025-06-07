let age = Number(prompt("enter age: "));

if (age >= 0 && age <= 12) {
    console.log("ბავშვი");
} else if (age >= 13 && age <= 19) {
    console.log("თინეიჯერი");
} else if (age >= 20 && age <= 59) {
    console.log("ზრდასრული");
} else if (age >= 60) {
    console.log("სენიორი");
} else {
    console.log("გთხოვ შეიყვანე ვალიდური ასაკი");
}
