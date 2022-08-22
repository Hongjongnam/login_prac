const express = require('express');
const router = express.Router();
const { createToken } = require('../../utils/jwt.js');
const { pool } = require('../../DB/db');
const jwt = require('jsonwebtoken');
const alertmove = require('../../utils/alertmove.js');
require('dotenv').config();

exports.login = async (req, res) => {
  const { email, account } = req.body;
  const sql = `SELECT * FROM user WHERE email = "${email}" AND account = "${account}"`;

  let [result] = await pool.query(sql);
  if (result.length !== 0) {
    console.log('Cookie 생성해서 쿠키 넘겨줘야해');
    const [{ email, account }] = result;
    const payload = {
      email,
      account,
    };
    // console.log('payload', payload);
    const jwt_token = createToken(payload);
    console.log('여기까지맞나', jwt_token);
    res.cookie('Access_token', token, { maxAge: 1000 * 60 * 60 });
    // res.send(alertmove('http://localhost:3000', '로그인에 성공하였습니다.'));
    // res.cookie('AccessToken', jwt_token, {
    //   path: '/user/login',
    //   httpOnly: true,
    //   secure: true,
    //   domain: 'localhost',
    //   maxAge: 60 * 60 * 1000,
    // });
  } else {
    res.send(alertmove('http://localhost:3000', 'Email을 확인하세요.'));
  }
};

exports.regist = async (req, res) => {
  const { email, nickname, account } = req.body;
  const sql = `SELECT * FROM user WHERE email = "${email}" AND nickname = "${nickname}"`;
  let [result] = await pool.query(sql);
  console.log('asdasdasdasd', result);

  if (result.length == 0) {
    // const { email, nickname, account } = req.body;
    console.log('회원가입 완료 / 데이터베이스에 넣자 / 쿼리문 작성 / res.json 으로 회원가입 성공 메세지 넘겨줘');
    const sql = `INSERT INTO user(email, nickname, account) VALUES(?,?,?)`;
    const params = [email, nickname, account];
    const [result] = await pool.execute(sql, params);
    res.json({ a: 1 });
  } else {
    console.log('여기는 중복됐다고 알려줘야함');
    res.json('중복');
  }
  // onChange 로 온 email값을 디비와 연결해서 값이 있으면 중복이라고 보내주기 없으면 없다고 알려주기
};
