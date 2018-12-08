const controller = require('../controllers/controller');

module.exports = (app) => {
    app.get('/tasks', controller.index);
    app.get('/task/:id', controller.show);
    app.post('/task/new', controller.post);
    app.put('/task/:id', controller.put);
    app.delete('/task/:id', controller.delete);
}