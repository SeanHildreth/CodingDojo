const Author = require('../models/models');

module.exports = {
    index: (req, res) => {
        Author.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    show: (req, res) => {
        Author.find({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    new: (req, res) => {
        Author.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    edit: (req, res) => {
        Author.updateOne({_id: req.params.id}, {$set: {name: req.body.name}})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    delete: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
};