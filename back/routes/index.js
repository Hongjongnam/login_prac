const express = require('express');
const adminRouter = require('./admin/adminRouter');
const contractRouter = require('./contract/contractRouter');
const userRouter = require('./user/userRouter');

const router = express.Router();

router.use('/admin', adminRouter);
router.use('/contract', contractRouter);
router.use('/user', userRouter);

module.exports = router;
