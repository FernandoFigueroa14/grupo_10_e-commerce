const express = require('express');
const multer = require('../js/multer');

const productController = require('../controllers/productController');
const createProductValidations = require('../js/validations/productsCreateValidations');
const updateProductValidations = require('../js/validations/productUpdateValidations');

const router = express.Router();

router.get('/detail/:id', productController.detail);

router.get('/create', productController.showFormCreate);
router.post('/create', multer.single('img'), createProductValidations, productController.processCreate);

router.get('/delete', productController.showFormDelete);
router.delete('/delete', productController.delete);

router.get('/edit', productController.showFormEditId);
router.get('/editProductById', productController.editProductById);
router.put('/edit', multer.single('img'), updateProductValidations, productController.updateProduct);

router.get('/search', productController.search);

module.exports = router;