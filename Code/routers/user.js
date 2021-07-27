const express = require('express');
const { body } = require('express-validator');

const userController = require('../controllers/userController');

const router = express.Router();

const validations = [
    body('emailUser').notEmpty().withMessage('El campo de e-mail no puede estar vacio'),
    body('passwordUser').notEmpty().withMessage('El campo de contraseña no puede estar vacio'),
    body('nameUser').notEmpty().withMessage('El campo de nombre no puede estar vacio'),
    body('lastnameUser').notEmpty().withMessage('El campo de apellido no puede estar vacio')
];

router.get('/login', userController.login);

router.get('/register', userController.register);
router.post('/register', validations, userController.processRegister);

router.get('/carrito', userController.cart);

router.get('/recoverPassword', userController.recoverPassword);

module.exports = router;