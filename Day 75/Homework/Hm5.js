function updateNumber(){
    let p = document.getElementById("p-main");
    let num = Number(p.textContent);

    num++;
    p.textContent = num;

    if(num === 10){
        clearInterval(myInterval);
    }
}

let myInterval = setInterval(updateNumber, 1000);
