require("dotenv").config();

const express = require("express");

const app = express();

app.use("/", require("./routes/site"));
app.use("/post", require("./routes/post"));

app.listen(process.env.PORT || 3000);