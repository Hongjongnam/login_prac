CREATE DATABASE Team3;

USE Team3;

CREATE TABLE user (
    email VARCHAR(50) NOT NULL PRIMARY KEY,
    nickname VARCHAR(50) NOT NULL UNIQUE,
    account VARCHAR(50) NOT NULL
);