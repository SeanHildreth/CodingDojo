const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const session = require('express-session');
app.use(session({
    secret: 'thisthingisasecretmessage',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
const flash = require('express-flash');
app.use(flash());
app.use(express.static( __dirname + '/public/dist/public' ));
var path = require('path');
app.use(express.static(path.join(__dirname, './client/static')));

require('./server/config/routes')(app);

app.listen(8000, () => {
    console.log('Listening on port 8000!')
});