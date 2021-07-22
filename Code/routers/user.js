const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/carrito', userController.cart);
router.get('/recoverPassword', userController.recoverPassword);

module.exports = router;