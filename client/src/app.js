const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');

require('dotenv-safe').config();

const db = require('./database/mongoConfig')
const userRoutes = require('./routes/userRoutes')

db.connect() 

app.use(cors())
app.use(express.json())
app.use("/users", userRoutes)

module.exports = app