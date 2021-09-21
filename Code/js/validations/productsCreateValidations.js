const { body } = require('express-validator')

const validations = [
  body('name')
    .notEmpty()
    .withMessage('El campo de nombre no puede estar vacio'),
  body('price')
    .notEmpty()
    .withMessage('El campo de precio no puede estar vacio')
    .bail()
    .isNumeric()
    .withMessage('El precio tiene que ser un valor numerico'),
  body('description')
    .notEmpty()
    .withMessage('El campo de descripcion no puede estar vacio'),
]

module.exports = validations