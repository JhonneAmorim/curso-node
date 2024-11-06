const edit = function (req, res) {
    return res.json(req.params['id']);
}

const store = function (req, res) {
    return res.json(req.body);
}

const update = function (req, res) {
    return res.json(req.body);
}

const destroy = function (req, res) {
    return res.json(req.params);
}

module.exports = { edit, store, update, destroy };