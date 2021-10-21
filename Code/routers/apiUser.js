const express = require('express')
const apiController = require('../controllers/apiUserController')

const router = express.Router()

router.get('/', apiController.getUsers)
router.get('/:id', apiController.getUser)
router.get('/img/:img', apiController.getUserImg)

module.exports = router