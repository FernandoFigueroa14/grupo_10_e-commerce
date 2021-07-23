const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/detail/:id', productController.detail);
router.get('/create', productController.showForm);
router.post('/create', productController.create);

module.exports = router;