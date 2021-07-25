const express = require('express');

const productController = require('../controllers/productController');
const multer = require('../js/multer');

const router = express.Router();

router.get('/detail/:id', productController.detail);

router.get('/create', productController.showFormCreate);
router.post('/create', multer.single('img'), productController.create);

router.get('/delete', productController.showFormDelete);
router.delete('/delete', productController.delete);

router.get('/edit', productController.showFormEditId);
router.get('/editProductById', productController.editProductById);
router.put('/edit', multer.single('img'), productController.update);

module.exports = router;