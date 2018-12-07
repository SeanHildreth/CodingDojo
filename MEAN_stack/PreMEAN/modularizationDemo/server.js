const express = require("express");
const app = express();

// your ejs configuratioins lines MUST come before your require("routes")(app)
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

require('./routes')(app)


app.listen(1234, () => {
    console.log('Listening on port 1234!')
});