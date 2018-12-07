const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotesdb');

var QuoteSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 2},
    quote_text: { type: String, required: true, maxlength: 256}
}, {timestamps: true });

module.exports = mongoose.model("Quote", QuoteSchema);