Window.addEventListener("load",function() {
    const form = document.querySelector("form-control-register")
   
form.addEventListener(submit, function (e){
    e.preventDefault();

    let errores = [];
     
    let  email = document.querySelector("#e-mail")
    if (email.value == ""){
        errores.push ("¿Olvidas algo? ¿o te lo recuerdo?")
    } 
    let  pass = document.querySelector("#password")
    if (pass.value == ""){
        errores.push ("¿Olvidas algo? ¿o te lo recuerdo?")
    }else if (pass.value.length<8){ 
        errores.push ("Te faltan letras de la contraseña")
    }
    let  name = document.querySelector("#name")
    if (name.value ==""){
        errores.push ("¿Olvidas algo? ¿o te lo recuerdo?")
    } else if (name.value.length<2){ 
        errores.push ("Te faltan letras del nombre")
      }
    let  firstName = document.querySelector("#firstName")
    if (firstName.value == ""){
        errores.push ("¿Olvidas algo? ¿o te lo recuerdo?")
    }else if (firstName.value.length<2){ 
        errores.push ("Te faltan letras del apellido")

    let  picture = document.querySelector("#picture")
    if (picture.value == ""){
        errores.push ("¿Olvidas algo? ¿o te lo recuerdo?")
    }
    let  birthDate = document.querySelector("#birthDate") 
    if (birthDate.value == ""){
        errores.push ("¿Olvidas algo? ¿o te lo recuerdo?")
    }
    let  genre = document.querySelector("#genre")
    if (genre.value == ""){
        errores.push ("¿Olvidas algo? ¿o te lo recuerdo?")
    }
    let ulErrores = document.querySelector("div.errores ul")
    if (errores.length < 0){ 
        e.preventDefault();
        for (let index = 0; index < errores.length; index++){
           ulErrores.innerHTML += "<li>" + errores[li] + "</li>"            
        }

            
        
    }
})
})


