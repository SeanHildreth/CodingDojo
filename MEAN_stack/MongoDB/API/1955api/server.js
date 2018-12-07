const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const session = require('express-session');
app.use(session({
    secret: 'sdgasdasdfasdgsdfgsdfg',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
const flash = require('express-flash');
app.use(flash());
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');




require('./routes')(app);

app.listen(8000, () => {
    console.log('Listening on port 8000!')
});