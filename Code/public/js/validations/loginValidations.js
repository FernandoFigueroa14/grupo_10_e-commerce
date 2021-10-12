window.addEventListener('load', () => {
  const user = document.querySelector('#user')

  user.addEventListener('change', (e) => {
    console.log(e.target.value)
  })
})