const index = function (req, res) {
    return res.json({ name: req.name, age: req.age });
}

module.exports = { index };