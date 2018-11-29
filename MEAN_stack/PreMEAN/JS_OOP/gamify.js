var tigger = {
    character: "Tigger",
    greeting: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
        }
};
var pooh = {
    character: "Winnie the Pooh",
    greeting: function(){
        console.log("Oh, bother!, Think, think, think!");
        }
};
var piglet = {
    character: "Piglet",
    greeting: function(){
        console.log("Oh, d-d-d-dear! I musn’t f-f-f-fear!");
        }
};
var bees = {
    character: "Bees",
    greeting: function(){
        console.log("Bzzzz, Bzzz, Bzzzzz, BZZZZ!");
        }
};
var owl = {
    character: "Owl",
    greeting: function(){
        console.log("This reminds me of the time when ....");
        }
};
var christopher = {
    character: "Christopher Robin",
    greeting: function(){
        console.log("Silly ol' bear!");
        }
};
var rabbit = {
    character: "Rabbit",
    greeting: function(){
        console.log("This is Rabbit's garden and Rabbit does his harvesting by the BOOK!, My gracious! That's it!, Oh, Why does it always have to be me? Why, oh why, oh why?, Oh, MY!");
        }
};
var gopher = {
    character: "Gopher",
    greeting: function(){
        console.log("Say, what's wrong Sonny?");
        }
};
var kanga = {
    character: "Kanga and Roo",
    greeting: function(){
        console.log("Why, hello, dear.");
        }
};
var eeyore = {
    character: "Eeyore",
    greeting: function(){
        console.log("Thanks for noticin' me.");
        }
};
var heffalumps = {
    character: "Heffalumps",
    greeting: function(){
        console.log("We are wonderful friends of Winnie the Pooh and all of his other friends!");
        }
};
tigger.north = pooh;
pooh.north = christopher;
pooh.east = bees;
pooh.south = tigger;
pooh.west = piglet;
piglet.north = owl;
piglet.east = pooh;
bees.north = rabbit;
bees.west = pooh;
owl.east = christopher;
owl.south = piglet;
christopher.north = kanga;
christopher.east = rabbit;
christopher.south = pooh;
christopher.west = owl;
rabbit.east = gopher;
rabbit.south = bees;
rabbit.west = christopher;
gopher.west = rabbit;
kanga.north = eeyore;
kanga.south = christopher;
eeyore.east = heffalumps;
eeyore.south = kanga;
heffalumps.west = eeyore;

var player = {
    location: tigger,
    honey: false
};


function mission() {
    var target = eeyore;
    console.log(target.character + " is looking for honey! Can you help?");
}


console.log(player);
console.log(player.location);

function move(direction) {
    if(direction === "north") {
        if(!player.location.north) {
            console.log("You may not go that way!");
        } else {
            player.location = player.location.north;
            console.log("You are now at " + player.location.character + "'s house.");
            player.location.greeting();
        }
    } if(direction === "east") {
        if(!player.location.east) {
            console.log("You may not go that way!");
        } else {
            player.location = player.location.east;
            console.log("You are now at " + player.location.character + "'s house.");
            player.location.greeting();
        }
    } if(direction === "south") {
        if(!player.location.south) {
            console.log("You may not go that way!");
        } else {
            player.location = player.location.south;
            console.log("You are now at " + player.location.character + "'s house.");
            player.location.greeting();
        }
    } if(direction === "west") {
        if(!player.location.west) {
            console.log("You may not go that way!");
        } else {
            player.location = player.location.west;
            console.log("You are now at " + player.location.character + "'s house.");
            player.location.greeting();
        }
    }
}

function pickUp() {
    if(player.location.character === "Bees") {
        player.honey = true;
        console.log("You've gathered some honey!");
    } else {
        console.log("There is no honey here to pickup!");
    }
}

function drop() {
    if(player.honey === true) {
        if(player.location.character === target.character) {
            console.log("Congratulations! You delivered the honey to the right place!");
        } else {
            console.log("You don't have any honey to drop")
        }
    } else {
        console.log("Whoops! This isn't the place that needs the honey!")
    }
}

mission();