const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasksdb');


const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 8 },
    description: { type: String, required: true, default: '' },
    completed: { type: Boolean, required: true, default: false },
}, {timestamps: true });

module.exports = mongoose.model("Task", TaskSchema)