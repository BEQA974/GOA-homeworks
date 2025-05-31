let dict = {
    name: "ბექა",
    surname: "ოღრაპიშვილი",
    academy: "Goa",
    city: "თბილისი",
    role: "მოსწავლე",
    favColor: "იასამნისფერი",


fullName: function() {
    console.log(this.name + " " + this.surname);
    },

showFavColor: function() {
    console.log("საყვარელი ფერია:", this.favColor);
    }
};

console.log(dict);


console.log(dict.city);


dict.fullName();
dict.showFavColor();


dict.city = "ბათუმი";
console.log(dict.city);
