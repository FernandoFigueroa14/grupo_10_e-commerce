const express = require('express')

const apiProductsController = require('../controllers/apiProductsController')

const router = express.Router()

router.get('/', apiProductsController.getProducts)
router.get('/:id', apiProductsController.getProduct)
router.get('/img/:img', apiProductsController.getImg)

module.exports = router