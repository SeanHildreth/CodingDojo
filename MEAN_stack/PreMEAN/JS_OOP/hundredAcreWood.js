var tigger = { character: "Tigger" };
tigger.north = pooh;
var pooh = { character: "Winnie the Pooh" };
pooh.north = christopher;
pooh.east = bees;
pooh.south = tigger;
pooh.west = piglet;
var piglet = { character: "Piglet" };
piglet.north = owl;
piglet.east = pooh;
var bees = { character: "Bees" };
bees.north = rabbit;
bees.west = pooh;
var owl = { character: "Owl" };
owl.east = christopher;
owl.south = piglet;
var christopher = { character: "Christopher Robin" };
christopher.north = kanga;
christopher.east = rabbit;
christopher.south = pooh;
christopher.west = owl;
var rabbit = { character: "Rabbit" };
rabbit.east = gopher;
rabbit.south = bees;
rabbit.west = christopher;
var gopher = { character: "Gopher" };
gopher.west = rabbit;
var kanga = { character: "Kanga and Roo" };
kanga.north = eeyore;
kanga.south = christopher;
var eeyore = { character: "Eeyore" };
eeyore.east = heffalumps;
eeyore.south = kanga;
var heffalumps = { character: "Heffalumps" };
heffalumps.west = eeyore;