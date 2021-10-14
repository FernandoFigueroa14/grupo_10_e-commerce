const { body } = require('express-validator')

const validations = [
  body('name')
    .notEmpty()
    .withMessage('El campo de nombre no puede estar vacio'),
  body('lastname')
    .notEmpty()
    .withMessage('El campo de apellido no puede estar vacio')
]

module.exports = validations