const express = require('express');
const router = express.Router();
const { createToken } = require('../../utils/jwt.js');
const { pool } = require('../../DB/db');
const jwt = require('jsonwebtoken');
const alertmove = require('../../utils/alertmove.js');
require('dotenv').config();

exports.login = async (req, res) => {
  const account = req.body;
  try {
    const sql = `SELECT * FROM user WHERE account = "${account[0]}"`;
    let [result] = await pool.query(sql);
    if (result.length == 0) {
      console.log('1. 계정없는곳');
      res.json({ error: true });
    } else {
      console.log('2. 계정있는곳');
      const [{ email, nickname, account }] = result;
      const payload = {
        email,
        nickname,
        account,
      };
      // console.log('payload', payload);
      const jwt_token = createToken(payload);
      // console.log('여기까지맞나', jwt_token);
      res.json({ error: false, jwt_token });
    }
  } catch (e) {
    console.error(e);
    res.json({ error: true });
  }
};

// exports.registform = async (req, res) => {
//   console.log(req.body);
//   const { formck } = req.body;
//   res.json({ error: false });
//   // const { email, nickname, account, valid } = req.body;
//   // try {
//   //   const sql = `SELECT * FROM user WHERE email = "${email}" AND nickname = "${nickname}"`;
//   //   let [result] = await pool.query(sql);
//   //   if (result.length == 0) {
//   //     // const { email, nickname, account } = req.body;
//   //     const sql = `INSERT INTO user(email, nickname, account) VALUES(?,?,?)`;
//   //     const params = [email, nickname, account];
//   //     const [result] = await pool.execute(sql, params);
//   //     console.log('회원가입 완료');

//   //     res.json({ error: false });
//   //   } else {
//   //     console.log('여기는 중복됐다고 알려줘야함');
//   //   }
//   // } catch (e) {
//   //   res.json({ error: true });
//   // }

//   // onChange 로 온 email값을 디비와 연결해서 값이 있으면 중복이라고 보내주기 없으면 없다고 알려주기
// };

exports.regist = async (req, res) => {
  const { email, nickname, account, valid } = req.body;
  try {
    const sql = `SELECT * FROM user WHERE email = "${email}" AND nickname = "${nickname}"`;
    let [result] = await pool.query(sql);
    if (result.length == 0) {
      // const { email, nickname, account } = req.body;
      const sql = `INSERT INTO user(email, nickname, account) VALUES(?,?,?)`;
      const params = [email, nickname, account];
      const [result] = await pool.execute(sql, params);
      console.log('회원가입 완료');

      res.json({ error: false });
    } else {
      console.log('여기는 중복됐다고 알려줘야함');
    }
  } catch (e) {
    res.json({ error: true });
  }

  // onChange 로 온 email값을 디비와 연결해서 값이 있으면 중복이라고 보내주기 없으면 없다고 알려주기
};
