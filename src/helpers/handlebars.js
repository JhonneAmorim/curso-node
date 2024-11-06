const { ExpressHandlebars } = require('express-handlebars');
const { PARTIALS_DIR, LAYOUTS_DIR, VIEWS_DIR } = require('./constants');

exports.init = function (app) {
    const hbs = new ExpressHandlebars({
        partialsDir: PARTIALS_DIR,
        layoutsDir: LAYOUTS_DIR,
        extname: '.html',  // Defina a extensão como .html, caso você esteja usando arquivos .html
    });
    app.engine('html', hbs.engine);
    app.set('view engine', 'html');
    app.set('views', VIEWS_DIR);
}