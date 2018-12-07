const Models = require('./models');

module.exports = {
    index: (req, res) => {
        Models.Message.find({}, (err, data) => {
            if(err) {
                console.log("Something went terribly wrong!");
                for(let key in err.errors) {
                    req.flash('mess', err.errors[key].message);
                }
                res.render('index');
            } else {
                res.render('index', {messages: data});
            }
        })
    },

    message: (req, res) => {
        console.log("MESSAGE POST DATA", req.body);
        Models.Message.create(req.body, (err, data) => {
            if(err) {
                console.log("Something went terribly wrong!");
                for(var key in err.errors){
                    req.flash('mess', err.errors[key].message);
                }
                res.redirect('/');
            } else {
                console.log('Successfully added a Message!');
                res.redirect('/');
            }
        })
    },

    comment: (req, res) => {
        console.log("COMMENT POST DATA", req.body);
        Models.Message.findOneAndUpdate({_id: req.params.id}, {$push: {comments: req.body}}, (err, data) => {
            if(err) {
                console.log("Something went terribly wrong!");
                for(var key in err.errors){
                    req.flash('mess', err.errors[key].message);
                }
                res.redirect('/');
            } else {
                console.log('Successfully added a Comment!');
                res.redirect('/');
            }
        })
    }
}