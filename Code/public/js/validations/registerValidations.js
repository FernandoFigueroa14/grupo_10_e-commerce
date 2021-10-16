window.addEventListener('load', function() {

  let form = document.querySelector('form')
  let  email = document.querySelector('#emailUser')
  let  pass = document.querySelector('#passwordUser')
  let  name = document.querySelector('#nameUser')
  let  firstName = document.querySelector('#lastNameUser')
  let  picture = document.querySelector('#profile-pic')
  let  birthDate = document.querySelector('#birth_Date')
  let  genre = document.querySelector('#genre')
  let ulErrores = document.querySelector('div.errores ul')

  

    let errores = []
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        console.log('se previene el envio')

    if (pass.value == ''){
      errores.push ('¿Olvidas algo? ¿o te lo recuerdo?')
    }else if (pass.value.length<8){
      errores.push ('Te faltan letras de la contraseña')
    }

    if (name.value == ''){
      errores.push ('¿Olvidas algo? ¿o te lo recuerdo?')
    } else if (name.value.length<2){
      errores.push ('Te faltan letras del nombre')
    }

    if (firstName.value == ''){
      errores.push ('¿Olvidas algo? ¿o te lo recuerdo?')
    }else if (firstName.value.length<2){
      errores.push ('Te faltan letras del apellido')
    }

    if (picture.value == ''){
      errores.push ('¿Olvidas algo? ¿o te lo recuerdo?')
    }

    if (birthDate.value == ''){
      errores.push ('¿Olvidas algo? ¿o te lo recuerdo?')
    }

    if (genre.value == ''){
      errores.push ('¿Olvidas algo? ¿o te lo recuerdo?')
    }

    if (errores.length < 0) {
      e.preventDefault()
      for (let index = 0; index < errores.length; index++){
        ulErrores.innerHTML += '<li>' + errores[index] + '</li>'
      }
      c
    
    }

  })
})