var express = require("express");
var path = require("path");
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



app.get('/', function(req, res) {
    var langs = ['C#', 'Java', 'JavaScript', 'PHP', 'Python', 'Ruby', 'Swift'];
    var locations = ["Berkeley, CA", "Boise, ID", "Chicago, IL", "Dallas, TX", "Los Angeles, CA", "Seattle, WA", "Silicon Valley, CA", "Tulsa, OK", "Tyson's Corner, VA", "Online"];
    res.render("index", {langs : langs, locations : locations});
});


app.post("/submit", function(req, res) {
    req.session.name = req.body.name;
    req.session.lang = req.body.lang;
    req.session.location = req.body.location;
    req.session.comment = req.body.comment;
    res.redirect('/result');
});


app.get('/result', function(req, res) {
    res.locals.name = req.session.name;
    res.locals.lang = req.session.lang;
    res.locals.location = req.session.location;
    res.locals.comment = req.session.comment;
    res.render("result");
});


app.listen(8000, function() {
    console.log("listening on port 8000");
});