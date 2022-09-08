const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv-safe").config();

const db = require("./database/mongoConfig");
db.connect();

app.use(cors());
app.use(express.json());

const usersRoutes = require("./routes/usersRoutes");
app.use("/users", usersRoutes);

module.exports = app;