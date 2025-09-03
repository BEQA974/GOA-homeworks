function allAdults(ages) {
    return ages.every(age => age >= 18);
}

const ages = [18, 20, 25];
console.log(allAdults(ages));

const ages2 = [16, 22, 30];
console.log(allAdults(ages2)); 
