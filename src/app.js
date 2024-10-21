require("dotenv").config();

const express = require("express");

const Home = require("./controllers/Home");

const app = express();


app.listen(process.env.PORT || 3000);