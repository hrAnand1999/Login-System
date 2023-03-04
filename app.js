const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config()
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user-v1');

const port = process.env.PORT || 4000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


app.use(express.static(__dirname + '/public'));


app.use(express.json());
app.use(express.urlencoded({ extended : false}));
app.use(cookieParser());

app.use('/', cors(), indexRouter);

app.use('/auth/api/v1/users', cors(), userRouter);


app.listen(port, () => {
    console.log('server is running')
})