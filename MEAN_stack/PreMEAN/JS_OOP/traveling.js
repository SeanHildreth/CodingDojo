var tigger = { character: "Tigger" };
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet" };
var bees = { character: "Bees" };
var owl = { character: "Owl" };
var christopher = { character: "Christopher Robin" };
var rabbit = { character: "Rabbit" };
var gopher = { character: "Gopher" };
var kanga = { character: "Kanga and Roo" };
var eeyore = { character: "Eeyore" };
var heffalumps = { character: "Heffalumps" };
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

var player = { location: tigger };
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