
const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session')
const MongoStore = require('connect-mongo');
const userRoute = require("./routes/userRoute")
const pageRoute = require("./routes/pageRoute")
const mainRoute = require("./routes/mainRoute")

const app = express();

//Connect DB
mongoose
  .connect('mongodb://localhost/nodesec')
  .then(() => {
    console.log('DB Connected Successfully');
  });

const port = 3000;


//Global variable
global.userIN = null

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(session({
  secret: 'my_keyboard_cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost/nodesec' })
}))

app.use('*', (req, res, next) => {
  userIN = req.session.userID
  next()
})

app.use("/", mainRoute);
app.use("/users", userRoute);
app.use("/pages", pageRoute);


app.listen(port, () => {
  console.log("sunucu çalışıyor");
});
