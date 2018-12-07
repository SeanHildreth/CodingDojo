const Dragon = require('./models');

module.exports = {
    index: (req, res) => {
        Dragon.find({}, (err, data) => {
            if(err) {
                console.log("Something went terribly wrong!");
                for(let key in err.errors) {
                    req.flash('dragons', err.errors[key].message);
                }
                res.render('index');
            } else {
                res.render('index', {dragons: data});
            }
        })
    },

    show: (req, res) => {
        Dragon.find({_id:req.params.id}, (err, data) => {
            if(err) {
                console.log("Something went terribly wrong!");
                for(let key in err.errors) {
                    req.flash('dragons', err.errors[key].message);
                }
                res.redirect('/');
            } else {
                console.log('SHOW DRAGON DATA', data);
                res.render('dragon', {dragon: data});
            }
        })
    },

    new: (req, res) => {
        res.render('new');
    },

    add: (req, res) => {
        console.log("NEW POST DATA", req.body);
        var dragon = new Dragon({name: req.body.name, age: req.body.age, color: req.body.color, alignment: req.body.alignment,});
        dragon.save((err) => {
            if(err) {
                console.log("Something went terribly wrong!");
                for(var key in err.errors){
                    req.flash('dragons', err.errors[key].message);
                }
                res.redirect('/');
            } else {
                console.log('Successfully added a dragon!');
                res.redirect('/dragon/' + dragon.id);
            }
        })
    },

    edit: (req, res) => {
        Dragon.find({_id:req.params.id}, (err, data) => {
            if(err) {
                console.log("Something went terribly wrong!");
                for(let key in err.errors) {
                    req.flash('dragons', err.errors[key].message);
                }
                res.redirect('/');
            } else {
                res.render('edit', {dragon: data});
            }
        })
    },

    update: (req, res) => {
        console.log("UPDATE POST DATA", req.body);
        Dragon.updateOne({_id:req.params.id}, {$set: {name: req.body.name, age: req.body.age, color: req.body.color, alignment: req.body.alignment}}, (err) => {
            if(err) {
                console.log("Something went terribly wrong!");
                for(var key in err.errors){
                    req.flash('dragons', err.errors[key].message);
                }
                res.redirect('/dragon/' + req.params.id);
            } else {
                console.log('Successfully updated a dragon!');
                res.redirect('/dragon/' + req.params.id);
            }
        })
    },

    destroy:  (req, res) => {
        console.log("Trying to destroy!")
        Dragon.remove({_id:req.params.id}, (err) => {
            if(err) {
                console.log("Something went terribly wrong!", err);
                for(var key in err.errors){
                    req.flash('dragons', err.errors[key].message);
                }
                res.redirect('/dragon/' + req.params.id);
            } else {
                console.log('Successfully destroyed a dragon!');
                res.redirect('/');
            }
        })
    }
}