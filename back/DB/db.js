require('dotenv').config();

const mysql = require('mysql2');
// 이상태로 냅둬주세요
const host = process.env.DB_HOST || '127.0.0.1';
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASSWORD || '3009';
const database = process.env.DB_DATABASE || 'Team3';

const config = { host, user, password, database };
const pool = mysql.createPool(config);
const promisePool = pool.promise();

exports.pool = promisePool;
