const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/usersdb');

var UserSchema = new mongoose.Schema({
    first_name:  { type: String, required: true, minlength: 2},
    last_name: { type: String, required: true, maxlength: 32 },
    age: { type: Number, min: 13, max: 150 },
    email: { type: String, required: true }
}, {timestamps: true });

module.exports = mongoose.model("User", UserSchema);