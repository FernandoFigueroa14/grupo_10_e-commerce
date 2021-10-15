Window.addEventListener("load",function() {
    const form = document.querySelector("form-control-register")
   
form.addEventListener(submit, function (e){
    e.preventDefault()
     
    let  email = document.querySelector("#e-mail")
    if (email.value == ""){
        alert ("¿Olvidas algo? ¿o te lo recuerdo?")
    } 
    if
    let  pass = document.querySelector("#password")
    if (pass.value == ""){
        alert ("¿Olvidas algo? ¿o te lo recuerdo?")
    }
    let  name = document.querySelector("#name")
    if (name.value ==""){
        alert ("¿Olvidas algo? ¿o te lo recuerdo?")
    } else if (name.value.length<2){ 
      alert ("Te faltan letras del nombre")
      }
    let  firstName = document.querySelector("#firstName")
    if (firstName.value == ""){
        alert ("¿Olvidas algo? ¿o te lo recuerdo?")
    }

    let  picture = document.querySelector("#picture")
    if (pass.value == ""){
        alert ("¿Olvidas algo? ¿o te lo recuerdo?")
    }
    let  birthDate = document.querySelector("#birthDate") 
    if (pass.value == ""){
        alert ("¿Olvidas algo? ¿o te lo recuerdo?")
    }
    let  genre = document.querySelector("#genre")
    if (pass.value == ""){
        alert ("¿Olvidas algo? ¿o te lo recuerdo?")
    }
})
})