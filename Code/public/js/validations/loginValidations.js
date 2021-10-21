window.addEventListener('load', () => {
  const user = document.querySelector('#user')
  const password = document.querySelector('#password')

  const nameError = document.querySelector('#userError')
  const passwordError = document.querySelector('#passwordError')

  let errors = {}

  user.addEventListener('blur', (e) => {
    if (e.target.value.length < 1) {
      errors.nameError = 'El campo de usuario no puede estar vacio'
      nameError.innerHTML = '<i class="fas fa-exclamation-circle"></i>  El campo de usuario no puede estar vacio'
    } else if (e.target.value.length < 5) {
      errors.nameError = 'El campo de usuario debe tener al menos 5 caracteres'
      nameError.innerHTML = '<i class="fas fa-exclamation-circle"></i>  El campo de usuario debe tener al menos 5 caracteres'
    } else {
      delete errors.nameError
      nameError.innerHTML = ''
    }
  })

  password.addEventListener('blur', (e) => {
    if(e.target.value.length < 1) {
      errors.passwordError = 'El campo de nombre no puede estar vacio'
      passwordError.innerHTML = '<i class="fas fa-exclamation-circle"></i>  El campo de password no puede estar vacio'
    } else {
      delete errors.passwordError
      passwordError.innerHTML = ''
    }
  })
})