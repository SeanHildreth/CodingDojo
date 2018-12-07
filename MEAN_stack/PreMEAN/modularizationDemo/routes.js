const controller = require('./controller');

module.exports = (app) => {
    app.get('/all/callback', controller.callbackGetAll)
    app.get('/all/promise', controller.promiseGetAll)
}