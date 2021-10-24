const { body } = require('express-validator')

const validations = [
  body('name')
    .notEmpty()
    .withMessage('El campo de nombre no puede estar vacio')
    .bail()
    .isLength({ min:5 })
    .withMessage('El campo de nombre debe tener al menors 5 caracteres'),
  body('price')
    .notEmpty()
    .withMessage('El campo de precio no puede estar vacio')
    .bail()
    .isNumeric()
    .withMessage('El precio tiene que ser un valor numerico'),
  body('description')
    .notEmpty()
    .withMessage('El campo de descripcion no puede estar vacio')
    .bail()
    .isLength({ min:20 })
    .withMessage('El campo de descripcion debe tener al menos 20 caracteres'),
  body('img')
    .custom((value, { req }) => {
      console.log(req.file)
      if (!req.file) {
        throw new Error('Debes de colocar una foto de producto')
      }
      // Indicates the success of this synchronous custom validator
      return true
    }),
]

module.exports = validations