const controller = require('../controllers/controller');

module.exports = (app) => {
    app.get('/api/products', controller.index);
    app.post('/api/product/new', controller.new);
    app.get('/api/product/:id', controller.show);
    app.put('/api/product/:id', controller.edit);
    app.delete('/api/product/:id', controller.delete);
};