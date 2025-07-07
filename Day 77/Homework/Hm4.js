let count = 0;

const interval = setInterval(() => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);
count++;
if (count === 5) {
    clearInterval(interval);
}
}, 1500);