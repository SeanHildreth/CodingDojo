const Wizard = require('./models');

module.exports = {
    callbackGetAll : (req, res) => {
        Wizard.find({}, (err, data) => {
            if(err) {
                res.render('index');
            } else {
                res.render('home');
            }
        })
    },
    promiseGetAll: (req, res) => {
        Wizard.find({})
            .then((data) => res.render('index'))
            .catch((err) => res.render('home'))
    }
}