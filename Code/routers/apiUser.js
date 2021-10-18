const express = require('express')
const apiController = require('../controllers/apiUserController')

const router = express.Router()

router.get('/users', apiController.getUsers)
router.get('/users/:id', apiController.getUser)
router.get('/users/img/:img', apiController.getUserImg)

module.exports = router