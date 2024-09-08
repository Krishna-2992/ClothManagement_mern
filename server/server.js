const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()

const clothRoutes = require('./routes/clothRoutes')

const app = express()
const port = process.env.PORT

app.use(cors({ origin: '*' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongo_URI = "mongodb+srv://krishnaagrawal2992:SMY6823F0epyaMh0@cluster0.wobxc.mongodb.net/"

mongoose
  .connect(mongo_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

app.use('/', clothRoutes)
// app.use('/', subscriberRoutes)

app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})

module.exports = app