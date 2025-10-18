const paragraph = document.getElementById("dayParagraph");
const button = document.getElementById("showDay");

const days = [
    "კვირა",     
    "ორშაბათი",  
    "სამშაბათი", 
    "ოთხშაბათი", 
    "ხუთშაბათი", 
    "პარასკევი", 
    "შაბათი"     
];

button.addEventListener("click", function() {
    const today = new Date();          
    const dayIndex = today.getDay();   
    paragraph.textContent = days[dayIndex]; 
})
