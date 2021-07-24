const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');
const multer = require('../js/multer');

router.get('/detail/:id', productController.detail);
router.get('/create', productController.showFormCreate);
router.post('/create', multer.single('img'), productController.create);
router.get('/delete', productController.showFormDelete);
router.delete('/delete', productController.delete);

module.exports = router;