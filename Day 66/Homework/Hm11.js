function getFormData(e){
    e.preventDefault()

    let form=document.getElementById("main-form")
    let phone=form.elements.phone.value;
    
    alert(phone)
}