const { body } = require('express-validator')

const productUpdateValidations = [
	body('name')
		.notEmpty()
		.withMessage('El campo nombre no puede estar vacio'),
	body('price')
		.notEmpty()
		.withMessage('El campo precio no puede estar vacio')
		.bail()
		.isNumeric()
		.withMessage('El campo precio tiene que ser un numero'),
	body('description')
		.notEmpty()
		.withMessage('El campo descripcion no puede estar vacio')
]

module.exports = productUpdateValidations
