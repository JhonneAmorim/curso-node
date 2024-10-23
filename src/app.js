require("dotenv").config();
const Home = require("./controllers/Home");
const Login = require("./controllers/Login");

const express = require("express");

const app = express();

app.get("/", Home.index);
app.post("/login", Login.store);

app.listen(process.env.PORT || 3000);