const Product = require('../models/models');

module.exports = {
    index: (req, res) => {
        Product.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    show: (req, res) => {
        Product.find({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    new: (req, res) => {
        Product.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    edit: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id}, {$set: {title: req.body.title, price: req.body.price, url: req.body.url}}, {runValidators: true})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    delete: (req, res) => {
        Product.findOneAndDelete({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
};