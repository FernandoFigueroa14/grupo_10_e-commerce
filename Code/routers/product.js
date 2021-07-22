const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/detalleProducto/:id', productController.detail);

module.exports = router;