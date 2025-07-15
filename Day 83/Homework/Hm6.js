const skipMultiplesOf4And6 = () => {
    for (let i = 1; i <= 30; i++) {
    if (i % 4 === 0 || i % 6 === 0) continue;
    console.log(i);
}
};

skipMultiplesOf4And6();