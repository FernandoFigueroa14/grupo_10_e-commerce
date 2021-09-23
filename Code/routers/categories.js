const express = require('express')
const categoriesController = require('../controllers/categoriesController')

const router = express.Router()

router.get('/women', categoriesController.women)
router.get('/men', categoriesController.men)
router.get('/kids', categoriesController.kids)

module.exports = router