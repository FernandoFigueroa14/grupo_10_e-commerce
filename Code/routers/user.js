const express = require('express')

const userController = require('../controllers/userController')
const createUserValidations = require('../js/validations/userRegisterValidations')
const loginUserValidations = require('../js/validations/userLoginValidations')
const multer = require('../js/multerUser')
const guestMiddleware = require('../js/guestMiddleware')
const authMiddleware = require('../js/authMiddleware')
const adminUser = require('../js/validateAdmin')

const router = express.Router()

router.get('/login', guestMiddleware, userController.login)
router.post('/login', loginUserValidations, userController.processLogin)

router.get('/register', guestMiddleware, userController.register)
router.post('/register', multer.single('profile-pic'), createUserValidations, userController.processRegister)

router.get('/profile', authMiddleware, adminUser, userController.profile)

router.post('/logout', userController.logout)

router.get('/carrito', userController.cart)

router.get('/recoverPassword', userController.recoverPassword)

module.exports = router