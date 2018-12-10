const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cakesdb');

const RatingSchema = new mongoose.Schema({
    rating_text: { type: String, required: true, maxlength: 128},
    rating: { type: Number, required: true, min: 1, max: 5},
}, {timestamps: true });
const CakeSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    url: { type: String, required: true, minlength: 10 },
    ratings: [RatingSchema]
}, {timestamps: true });

module.exports = {
    "Cake": mongoose.model("Cake", CakeSchema),
    "Rating": mongoose.model("Rating", RatingSchema)
}