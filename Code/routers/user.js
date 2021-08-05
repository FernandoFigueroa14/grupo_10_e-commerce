const express = require('express');

const userController = require('../controllers/userController');
const createUserValidations = require('../js/validations/userRegisterValidations');
const loginUserValidations = require('../js/validations/userLoginValidations');

const router = express.Router();

router.get('/login', userController.login);
router.post('/login', loginUserValidations, userController.processLogin);

router.get('/register', userController.register);
router.post('/register', createUserValidations, userController.processRegister);

router.get('/carrito', userController.cart);

router.get('/recoverPassword', userController.recoverPassword);

module.exports = router;