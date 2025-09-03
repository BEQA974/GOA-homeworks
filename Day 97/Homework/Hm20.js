function allPricesBelow100(prices) {
    return prices.every(price => price < 100);
}

const prices = [10, 50, 99];
console.log(allPricesBelow100(prices)); 

const prices2 = [10, 150, 80];
console.log(allPricesBelow100(prices2)); 