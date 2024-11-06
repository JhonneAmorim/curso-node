const { MASTER_DIR } = require("../helpers/constants");

const index = function (req, res) {
    return res.render("login", { layout: MASTER_DIR, title: "Login" });
};

module.exports = { index };