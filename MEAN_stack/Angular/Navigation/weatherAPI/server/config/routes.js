const controller = require('../controllers/controller');

module.exports = (app) => {
    app.get('/cakes', controller.index);
    app.get('/cake/:id', controller.show);
    app.post('/cake/new', controller.new);
    app.post('/cake/:id', controller.rate);
    app.put('/cake/:id', controller.edit);
    app.delete('/cake/:id', controller.delete);
};