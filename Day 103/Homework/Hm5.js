    const months = [
    "იანვარი", "თებერვალი", "მარტი", "აპრილი",
    "მაისი", "ივნისი", "ივლისი", "აგვისტო",
    "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"
    ];

    const days = [
    "კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი",
    "ხუთშაბათი", "პარასკევი", "შაბათი"
    ];

    let now = new Date();

    let monthName = months[now.getMonth()]; 
    let dayName = days[now.getDay()];         

    document.getElementById("month").textContent = "თვე: " + monthName;
    document.getElementById("day").textContent = "დღე: " + dayName;