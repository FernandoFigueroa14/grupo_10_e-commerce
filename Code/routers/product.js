const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');
const multer = require('../js/multer');

router.get('/detail/:id', productController.detail);
router.get('/create', productController.showForm);
router.post('/create', multer.single('img'), productController.create);

module.exports = router;