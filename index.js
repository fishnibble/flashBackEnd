const express = require('express');
const bodyParser = require('body-parser');
const userControler = require('./controllers/index');
const expressCallBack = require('./expressCallBack/index');
const db = require('./db/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use((_, res, next) => {
    res.set({ Tk: '!' })
    next()
  })

app.post('/register', expressCallBack(userControler.postUser))

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
  })
