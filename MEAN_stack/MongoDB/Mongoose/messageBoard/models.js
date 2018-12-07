const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/messageboarddb');

const CommentSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    comment_text: { type: String, required: true, maxlength: 256},
}, {timestamps: true });
const MessageSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    message_text: { type: String, required: true, maxlength: 256},
    comments: [CommentSchema]
}, {timestamps: true });


module.exports = {
    "Message": mongoose.model("Message", MessageSchema),
    'Comment': mongoose.model('Comment', CommentSchema)
}