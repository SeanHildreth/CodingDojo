const Name = require('./models');

module.exports = {
    index: (req, res) => {
        Name.find({}, (err, data) => {
            if(err) {
                console.log("Something went terribly wrong!", err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", names: data});
            }
        })
    },

    new: (req, res) => {
        console.log("NAME", req.params.name);
        Name.create(req.params, (err, data) => {
            if(err) {
                console.log("Something went terribly wrong!", err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Added", name: data});
            }
        })
    },

    remove: (req, res) => {
        console.log("NAME", req.params.name);
        Name.remove({name: req.params.name}, (err) => {
            if(err) {
                console.log("Something went terribly wrong!", err);
                res.json({message: "Error", error: err});
            } else {
                console.log('Successfully removed a name!');
                res.redirect('/');
            }
        })
    },

    name: (req, res) => {
        console.log("NAME", req.params.name);
        Name.find({name: req.params.name}, (err, data) => {
            if(err) {
                console.log("Something went terribly wrong!", err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", name: data});
            }
        })
    }
}