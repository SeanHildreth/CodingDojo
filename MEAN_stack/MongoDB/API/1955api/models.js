const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/namedb');


const NameSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
}, {timestamps: true });


module.exports = mongoose.model("Name", NameSchema)