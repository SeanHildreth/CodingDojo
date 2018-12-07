const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wizarddb')

const WizardSchema = new mongoose.Schema({
    name: {type: String, required: true},
    numSpellsKnown: Number
});

module.exports = mongoose.model('Wizard', WizardSchema);