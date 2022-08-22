const express = require("express");
const router = express.Router();
const { pool } = require("../../DB/db");
const Web3 = require("web3");
const RegistContract = require("../../truffle/build/contracts/ChanToken.json");

exports.mint = async (req, res) => {
res.json({a:1})
};