const express = require('express');
const router = express.Router();
const userController = require('./userController');
require('dotenv').config();

router.post('/login', userController.login);
router.post('/regist', userController.regist);

module.exports = router;
