window.addEventListener('load', function() {

  const form = document.querySelector('form')
  const email = document.querySelector('#emailUser')
  const password = document.querySelector('#passwordUser')
  const name = document.querySelector('#nameUser')
  const lastName = document.querySelector('#lastNameUser')
  // const img = document.querySelector('#img')

  const formError = document.querySelector('#formError')
  const emailError = document.querySelector('#emailError')
  const passwordError = document.querySelector('#passwordError')
  const nameError = document.querySelector('#nameError')
  const lastNameUserError = document.querySelector('#lastNameError')
  // const imgError = document.querySelector('#imgError')

  let errors = {}

  email.addEventListener('blur', (e) => {
    if (e.target.value.length < 1) {
      errors.emailError = 'El campo de email no puede estar vacio'
      emailError.innerHTML = '<i class="fas fa-exclamation-circle"></i>  El campo de email no puede estar vacio'
    } else if (e.target.value.length < 8) {
      errors.emailError = 'El campo de email debe tener al menos 8 caracteres'
      emailError.innerHTML = '<i class="fas fa-exclamation-circle"></i>  El campo de email debe tener al menos 8 caracteres'
    } else {
      delete errors.emailError
      emailError.innerHTML = ''
    }
  })

  password.addEventListener('blur', (e) => {
    if (e.target.value.length < 1) {
      errors.passwordError = 'El campo de password no puede estar vacio'
      passwordError.innerHTML = '<i class="fas fa-exclamation-circle"></i>  El campo de password no puede estar vacio'
    } else if (e.target.value.length < 8) {
      errors.passwordError = 'El campo de password debe tener al menos 8 caracteres'
      passwordError.innerHTML = '<i class="fas fa-exclamation-circle"></i>  El campo de password debe tener al menos 8 caracteres'
    } else {
      delete errors.passwordError
      passwordError.innerHTML = ''
    }
  })

  name.addEventListener('blur', (e) => {
    if (e.target.value.length < 1) {
      errors.nameError = 'El campo de nombre no puede estar vacio'
      nameError.innerHTML = '<i class="fas fa-exclamation-circle"></i>  El campo de nombre no puede estar vacio'
    } else if (e.target.value.length < 3) {
      errors.nameError = 'El campo de nombre debe tener al menos 3 caracteres'
      nameError.innerHTML = '<i class="fas fa-exclamation-circle"></i>  El campo de nombre debe tener al menos 3 caracteres'
    } else {
      delete errors.nameError
      nameError.innerHTML = ''
    }
  })

  lastName.addEventListener('blur', (e) => {
    if (e.target.value.length < 1) {
      errors.lastNameUserError = 'El campo de apellido no puede estar vacio'
      lastNameUserError.innerHTML = '<i class="fas fa-exclamation-circle"></i>  El campo de apellido no puede estar vacio'
    } else if (e.target.value.length < 3) {
      errors.lastNameUserError = 'El campo de apellido debe tener al menos 3 caracteres'
      lastNameUserError.innerHTML = '<i class="fas fa-exclamation-circle"></i>  El campo de apellido debe tener al menos 3 caracteres'
    } else {
      delete errors.lastNameUserError
      lastNameUserError.innerHTML = ''
    }
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('dentro')
    if(Object.keys(errors).length < 1){
      form.submit()
    } else {
      formError.innerHTML = '<i class="fas fa-exclamation-circle"></i>  Comprueba que tus datos sean correctos'
    }
  })

  /* if (img.value.length === 0) {
    errors.imgError = 'Debes de subir una foto del producto'
    imgError.innerHTML = '<i class="fas fa-exclamation-circle"></i>  Debes de subir una foto de perfil'
  } else {
    if (errors.imgError) {
      delete errors.imgError
      imgError.innerHTML = ''
    }
  } */
})