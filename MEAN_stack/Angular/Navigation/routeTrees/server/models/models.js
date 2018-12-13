const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authordb');


const AuthorSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: [3, 'Input a valid author name!'] },
}, {timestamps: true });

module.exports =  mongoose.model("Author", AuthorSchema);