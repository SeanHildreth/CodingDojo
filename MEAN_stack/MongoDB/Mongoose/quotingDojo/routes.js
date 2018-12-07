const controller = require('./controller');

module.exports = (app) => {
    app.get('/', controller.index);
    app.post('/add', controller.add);
    app.get('/quotes', controller.quotes);
}