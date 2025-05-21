function getFormData(e){
    e.preventDefault()

    let form=document.getElementById("main-form")
    let name=form.elements.name.value;

    console.log(name)
}