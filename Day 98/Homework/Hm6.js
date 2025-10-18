const numbers = [4, 6, 8, 9, 11];

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const hasPrime = numbers.some(isPrime);

console.log(hasPrime); 
