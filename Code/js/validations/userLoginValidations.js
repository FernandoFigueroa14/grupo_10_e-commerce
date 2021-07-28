const { body } = require('express-validator');

const validations = [
    body('user').notEmpty().withMessage('El campo de usuario no puede estar vacio'),
    body('password').notEmpty().withMessage('El campo de ontraseña no puede estar vacio')
];

module.exports = validations;