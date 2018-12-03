var express = require('express');
var app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/cars', (request, response) => {
    response.render("cars");
});

app.get('/cats', (request, response) => {
    response.render("cats");
});

app.get('/cats', (request, response) => {
    response.render("cats");
});

app.get('/cars/new', (request, response) => {
    response.render("newCar");
});

app.get('/cats/:catId', (request, response) => {
    var catId = request.params.catId;
    var catArray = [
        {name: "Leo", favFood: "Chicken", age: 7, sleepSpots: ["in any box", "ontop of the pillows", "under the bed"]},
        {name: "Morrison", favFood: "Tuna", age: 9, sleepSpots: ["under the table", "in the attic", "in the window"]},
        {name: "Prismarine", favFood: "Fish", age: 1, sleepSpots: ["by the ocean", "ontop of the fishtank", "under the fishtank"]},
        {name: "Rainbow", favFood: "Roast", age: 1, sleepSpots: ["on a log", "at the end of a rainbow", "in the sun"]},
    ];
    response.render("details", {cats: catArray, catId: catId});
});

app.listen(8000, () => {
    console.log("Running on localhost at port 8000.");
});