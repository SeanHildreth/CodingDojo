const controller = require('./controller');

module.exports = (app) => {
    app.get('/', controller.index);
    app.get('/dragon/new', controller.new);
    app.get('/dragon/:id', controller.show);
    app.post('/dragon', controller.add);
    app.get('/dragon/edit/:id', controller.edit);
    app.post('/dragon/:id', controller.update);
    app.get('/dragon/destroy/:id', controller.destroy);
}