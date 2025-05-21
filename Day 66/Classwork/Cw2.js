function getFormData (e){
    let form=document.getElementById("main-form")
    e.preventDefault()
    let name=form.ELEMENT_NODE.name.value;
    console.log(name)
    form.reset()
}