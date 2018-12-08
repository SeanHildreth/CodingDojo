const Task = require('../models/models');

module.exports = {
    index: (req, res) => {
        Task.find({}, (err, data) => {
            if(err) {
                console.log("Something went terribly wrong!", err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", tasks: data});
            }
        })
    },

    show: (req, res) => {
        console.log("Task ID: ", req.params.id);
        Task.find({_id: req.params.id}, (err, data) => {
            if(err) {
                console.log("Something went terribly wrong!", err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", task: data});
            }
        })
    },

    post: (req, res) => {
        Task.create(req.body, (err, data) => {
            if(err) {
                console.log("Something went terribly wrong!", err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", task: data});
            }
        })
    },

    put: (req, res) => {
        console.log("Task ID: ", req.params.id);
        Task.updateOne({_id: req.params.id}, {$set: {title: req.body.title, description: req.body.description}}, (err) => {
            if(err) {
                console.log("Something went terribly wrong!", err);
                res.json({message: "Error", error: err});
            } else {
                console.log("Updated")
                res.json({message: "Success"});
            }
        })
    },

    delete: (req, res) => {
        console.log("Task ID: ", req.params.id);
        Task.deleteOne({_id: req.params.id}, (err) => {
            if(err) {
                console.log("Something went terribly wrong!", err);
                res.json({message: "Error", error: err});
            } else {
                console.log('Successfully removed a task!');
                res.json({message: "Successfully Deleted!"});
            }
        })
    }
}