const m = require('../models/models');

module.exports = {
    index: (req, res) => {
        m.Cake.find({}, (err, data) => {
            if(err) {
                console.log("Something went terribly wrong!", err);
                res.json({message: "Error", error: err});
            } else {
                console.log("Found all the cakes!");
                res.json({message: "Successfully Found All!", cakes: data});
            }
        })
    },

    show: (req, res) => {
        console.log("Cake ID: ", req.params.id);
        m.Cake.find({_id: req.params.id}, (err, data) => {
            if(err) {
                console.log("Something went terribly wrong!", err);
                res.json({message: "Error", error: err});
            } else {
                console.log("Showed the cake!");
                res.json({message: "Successfully Showed!", cake: data});
            }
        })
    },

    new: (req, res) => {
        m.Cake.create(req.body, (err, data) => {
            if(err) {
                console.log("Something went terribly wrong!", err);
                res.json({message: "Error", error: err});
            } else {
                console.log("Created a cake!");
                res.json({message: "Successfully Created!", cake: data});
            }
        })
    },

    rate: (req, res) => {
        console.log("Cake ID: ", req.params.id);
        m.Cake.findOneAndUpdate({_id: req.params.id}, {$push: {ratings: req.body}}, (err) => {
            if(err) {
                console.log("Something went terribly wrong!", err);
                res.json({message: "Error", error: err});
            } else {
                console.log("Rated a cake!");
                res.json({message: "Successfully Rated!"});
            }
        })
    },

    edit: (req, res) => {
        console.log("Cake ID: ", req.params.id);
        m.Cake.updateOne({_id: req.params.id}, {$set: {name: req.body.name, url: req.body.url}}, (err) => {
            if(err) {
                console.log("Something went terribly wrong!", err);
                res.json({message: "Error", error: err});
            } else {
                console.log("Updated a cake!");
                res.json({message: "Successfully Updated!"});
            }
        })
    },

    delete: (req, res) => {
        console.log("Cake ID: ", req.params.id);
        m.Cake.deleteOne({_id: req.params.id}, (err) => {
            if(err) {
                console.log("Something went terribly wrong!", err);
                res.json({message: "Error", error: err});
            } else {
                console.log('Deleted a cake!');
                res.json({message: "Successfully Deleted!"});
            }
        })
    }
};