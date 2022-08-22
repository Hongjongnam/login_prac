const express = require("express");
const router = express.Router();
const { pool } = require("../../DB/db");
const Web3 = require("web3");
const RegistContract = require("../../truffle/build/contracts/ChanToken.json");

exports.main = async (req, res) => {
  const sql = `SELECT * FROM dapp_info`;
  const [result] = await pool.execute(sql);
  res.json({ result });
};

exports.upload = async (req, res) => {
  // console.log(req.body);
  const { inputAccount, image, apk, explain } = req.body;
  const sql = `INSERT INTO dapp_info(account, img, files, explains) VALUES(?, ?, ?, ?)`;
  const params = [inputAccount, image, apk, explain];
  try {
    const [result] = await pool.execute(sql, params);
    res.json({});
  } catch (e) {
    console.log(e);
    res.json({});
  }
};

exports.validpage = async (req, res) => {
  const sql = `SELECT * FROM dapp_info`;
  const [result] = await pool.execute(sql);
  res.json({ result });
};

exports.regist = async (req, res) => {
  console.log("Dapp transaction of registration");
  // const { account } = req.body;

  // const { from } = req.body;
  // console.log(from);
  // console.log(req.body);
  // console.log(account);

  // const from = account;

  const account = "0x833b4fBbA0003B8fFb7D1e29A56e1efB81894e82";
  // account 값은 홈페이지주인이라 고정값일듯?

  const web3 = new Web3(
    new Web3.providers.HttpProvider("http://127.0.0.1:8545")
  );

  const txCount = await web3.eth.getTransactionCount(account);

  const networkId = await web3.eth.net.getId();
  const ca = RegistContract.networks[networkId].address;
  const abi = RegistContract.abi;
  const deployed = new web3.eth.Contract(abi, ca);
  const data = await deployed.methods.increment().encodeABI();
  let txObject = {
    nonce: txCount,
    from: account,
    to: ca,
    data,
  };
  // console.log(txObject);

  res.json(txObject);
};

exports.cancel = async (req, res) => {
  const { idx } = req.body;
  console.log(idx);
  const sql = `DELETE FROM dapp_info WHERE idx=${idx}`;
  await pool.execute(sql);
  res.json({});
};
