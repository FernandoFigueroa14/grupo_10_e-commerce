const { body } = require('express-validator')

const validations = [
	body('emailUser')
		.notEmpty()
		.withMessage('El campo de e-mail no puede estar vacio'),
	body('passwordUser')
		.notEmpty()
		.withMessage('El campo de contraseña no puede estar vacio'),
	body('nameUser')
		.notEmpty()
		.withMessage('El campo de nombre no puede estar vacio'),
	body('lastnameUser')
		.notEmpty()
		.withMessage('El campo de apellido no puede estar vacio')
]

module.exports = validations