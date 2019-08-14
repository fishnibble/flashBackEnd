const express = require('express');
const bodyParser = require('body-parser');
const userControler = require('./controllers/index');
const expressCallBack = require('./expressCallBack/index');
const db = require('./db/index');
const passport = require('passport');
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

app.use(passport.initialize());
require('./auth/index')(passport);

app.post('/register',
  expressCallBack(userControler.postUser));

app.post('/login', 
  expressCallBack(userControler.postLogin))

app.post('/adddeck', 
  passport.authenticate('user', { session: false }), 
  expressCallBack(userControler.postDeckToUser));

app.post('/addcards',
  passport.authenticate('user', { session: false }),
  expressCallBack(userControler.postCardToDeck));

app.patch('/updatedeckname', 
  passport.authenticate('user', { session: false }),
  expressCallBack(userControler.patchDeckName));

app.patch('/updatecards',
  passport.authenticate('user', { session: false }),
  expressCallBack(userControler.patchCards));

app.delete('/removecards',
  passport.authenticate('user', { session: false }),
  expressCallBack(userControler.deleteCards));

app.delete('/removedeck',
  passport.authenticate('user', { session: false }),
  expressCallBack(userControler.deleteDeck));

app.listen(3000, () => {
  console.log('Server is listening on port ' + process.env.PORT)
})
