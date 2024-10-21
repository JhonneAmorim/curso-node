require("dotenv").config();

const express = require("express");

const app = express();

app.get("/user", function (req, res) {
    return res.json("user");
});

app.get("/login", function (req, res) {
    return res.json("login");
});

app.listen(process.env.PORT || 3000);