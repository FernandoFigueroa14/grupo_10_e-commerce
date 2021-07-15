const express = require('express');
const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/', mainController.home);
router.get('/home', mainController.home);
router.get('/detalleProducto', mainController.producto);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/carrito', mainController.cart);

module.exports = router;