const controller = require('../controllers/controller');

module.exports = (app) => {
    app.get('/authors', controller.index);
    app.get('/author/:id', controller.show);
    app.post('/author/new', controller.new);
    app.put('/author/:id', controller.edit);
    app.delete('/author/:id', controller.delete);
};