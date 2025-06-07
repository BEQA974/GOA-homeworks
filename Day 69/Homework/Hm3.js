let num1=Number(prompt("enter number: "));
let num2=Number(prompt("enter number: "));
let num3=Number(prompt("enter number: "));

if(num1 > num2 && num1 > num3){
    console.log("ყველაზე დიდი"+num1)
}
if(num2 > num3 && num2 > num1){
    console.log("ყველაზე დიდი"+num2)
}
if(num3 > num2 && num3 > num1){
    console.log("ყველაზე დიდი"+num3)
}