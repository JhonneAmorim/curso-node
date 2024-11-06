require("dotenv").config();
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const { init: initHandlebars } = require("./helpers/handlebars");

const app = express();

initHandlebars(app);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "assets/css")));

app.use(function (req, res, next) {
    res.locals.name = "Jhonne";
    res.locals.age = 25;
    // if (req.session.user) {
    //     res.locals.user = req.session.user;
    // }
    next();
});

app.use("/", require("./routes/site"));
app.use("/post", require("./routes/post"));

app.listen(process.env.PORT || 3000);