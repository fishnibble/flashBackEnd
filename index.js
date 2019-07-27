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

app.post('/register', expressCallBack(userControler.postUser));
app.post('/adddeck', expressCallBack(userControler.postDeckToUser));
app.post('/addcards', expressCallBack(userControler.postCardToDeck));
app.patch('/changedeckname', expressCallBack(userControler.patchDeckName));
app.patch('/changecards', expressCallBack(userControler.patchCards));
app.delete('/removecards', expressCallBack(userControler.deleteCards));
app.delete('/removedeck', expressCallBack(userControler.deleteDeck));

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
  })
