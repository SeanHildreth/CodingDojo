const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dragonsdb');

var DragonsSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    age: { type: Number, min: 1, max: 9999 },
    color: { type: String, required: true, minlength: 3},
    alignment: { type: String, required: true, minlength: 3}
}, {timestamps: true });

module.exports = mongoose.model("Dragon", DragonsSchema);