const express = require('express');
const cors = require('cors');
const app = express();
const mainRouter = require('./routes');
const cookieParser = require('cookie-parser');

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));
app.use(cookieParser());

app.use('/', mainRouter);

app.listen(4000, () => {
  console.log('back server 4000');
});
