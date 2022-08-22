const express = require('express');
const router = express.Router();
const userController = require('./userController');
require('dotenv').config();

router.post('/regist', userController.regist);
router.post('/login', userController.login);

module.exports = router;
