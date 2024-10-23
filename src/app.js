require("dotenv").config();

const express = require("express");

const app = express();

// app.get("/user/:id", function (req, res) {
//     return res.json(req.params.id);
// });

app.get("/user", function (req, res) {
    const { name, age } = req.query;
    return res.status(404).send(name);
});

app.listen(process.env.PORT || 3000);