const express = require('express');
const bodyParser = require('body-parser');
const userControler = require('./controllers/index');
const expressCallBack = require('./expressCallBack/index');
const db = require('./db/index');
const passport = require('passport');
const auth = passport.authenticate('user', { session: false })
require('dotenv').config();

/*
  TODO: Need to add passport to routes
*/
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use((_, res, next) => {
  res.set({ Tk: '!' })
  next()
})

app.post('/register',
  expressCallBack(userControler.postUser));

app.post('/login', 
  expressCallBack(userControler.postLogin))

app.post('/adddeck',
  expressCallBack(userControler.postDeckToUser),
  auth);

app.post('/addcards',
  expressCallBack(userControler.postCardToDeck),
  auth);

app.patch('/changedeckname',
  expressCallBack(userControler.patchDeckName),
  auth);

app.patch('/changecards',
  expressCallBack(userControler.patchCards),
  auth);

app.delete('/removecards',
  expressCallBack(userControler.deleteCards),
  auth);

app.delete('/removedeck',
  expressCallBack(userControler.deleteDeck),
  auth);

app.listen(3000, () => {
  console.log('Server is listening on port ' + process.env.PORT)
})
