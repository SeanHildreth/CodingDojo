const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const session = require('express-session');
app.use(session({
    secret: 'lkajsdhgflrwtkasj',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
const flash = require('express-flash');
app.use(flash());
var path = require('path');
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');




require('./server/config/routes')(app);

app.listen(8000, () => {
    console.log('Listening on port 8000!')
});