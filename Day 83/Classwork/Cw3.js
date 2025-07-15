const printEvenNumbers = () => {
    let count = 0;

    for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      continue; // გამოტოვე კენტი რიცხვები
    }

    console.log(i); // დაბეჭდე ლუწი რიცხვი
    count++;

    if (count === 5) {
      break; // შეწყვიტე როცა 5 ლუწი დაიბეჭდება
    }
}
};

printEvenNumbers();
