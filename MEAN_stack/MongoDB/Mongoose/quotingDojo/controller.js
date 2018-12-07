const Quote = require('./models');

module.exports = {
    index: (req, res) => {
        res.render('index');
    },

    add: (req, res) => {
        console.log("POST DATA", req.body);
        var quote = new Quote({name: req.body.name, quote_text: req.body.quote_text});
        quote.save((err) => {
            if(err) {
                console.log("Something isn't right here", err);
                for(let key in err.errors) {
                    req.flash('saveQuote', err.errors[key].message);
                }
                res.redirect('/');
            } else {
                console.log('Successfully added new Quote!');
                res.redirect('/quotes');
            }
        })
    },

    quotes: (req, res) => {
        Quote.find({}, (err, data) => {
            if(err) {
                console.log('There was an error!')
                res.redirect('/');
            } else {
                res.render('quotes', {quotes: data});
            }
        })
    }
}