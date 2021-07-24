const express = require('express');
const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/', mainController.home);
router.get('/home', mainController.home);

module.exports = router;