const User = require('./models');

module.exports = {
    index: (req, res) => {
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        User.find({}, (err, data) => {
            if(err) {
                console.log('There was an error!')
                res.render('index');
            } else {
                res.render('index', {users: data});
            }
        })
    },

    users: (req, res) => {
        console.log("POST DATA", req.body);
        // This is where we would add the user from req.body to the database.
        // create a new User with the name and age corresponding to those from req.body
        var user = new User({first_name: req.body.first_name, last_name: req.body.last_name, age: req.body.age, email: req.body.email,});
        // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
        user.save((err) => {
            // if there is an error console.log that something went wrong!
            if(err) {
                // if there is an error upon saving, use console.log to see what is in the err object 
                console.log("We have an error!", err);
                // adjust the code below as needed to create a flash message with the tag and content you would like
                for(var key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
                // redirect the user to an appropriate route
                res.redirect('/');
            } else { // else console.log that we did well and then redirect to the root route
                console.log('Successfully added a user!');
                res.redirect('/');
            }
        })
    }
}