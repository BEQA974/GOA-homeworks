function getFormData(e){
    e.preventDefault()

    let form=document.getElementById("main-form")
    let mail=form.elements.mail.value;
    
    console.log(mail)
    form.reset()
}