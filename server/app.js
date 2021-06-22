require('dotenv').config();
const express = require('express');
const cors = require('cors')


const indexRouter = require('./src/routes/indexRouter');
const userRouter = require('./src/routes/userRouter');
const dbConnect = require('./src/config/dbConnect');

const app = express();
const { PORT } = process.env


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// подключаем роутеры
app.use('/', indexRouter)
app.use('/user', userRouter)


// стартуем наш сервер
app.listen(PORT || 3001, () => {
  console.log('Server started on port', PORT)
  dbConnect();// запускаем базу данных
})