const express = require("express");
const router = express.Router();
const contractController = require("./contractController");

router.post("/mint", contractController.mint);

module.exports = router;
