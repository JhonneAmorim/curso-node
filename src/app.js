require("dotenv").config();
const Home = require("./controllers/Home");
const Login = require("./controllers/Login");

const express = require("express");

const app = express();

// app.use('/signup', function (req, res, next) {
//     // res.json("middleware");
//     // req.name = 'John Doe';
//     // req.age = 25;
//     return res.json("signup");
//     // next();
// });

app.get("/", Home.index);
app.post("/login", function (req, res, next) {
    return res.json("middleware login");
    // next();
}, Login.store);

app.listen(process.env.PORT || 3000);