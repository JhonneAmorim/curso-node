const edit = function (req, res) {
    return res.json(req.params['id']);
}

module.exports = { edit };