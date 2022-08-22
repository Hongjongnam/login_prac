const express = require("express");
const router = express.Router();
const adminController = require("./adminController");

router.post("/", adminController.main);
router.post("/upload", adminController.upload);
router.post("/validpage", adminController.validpage);
router.post("/regist", adminController.regist);
router.post("/cancel", adminController.cancel);

module.exports = router;
