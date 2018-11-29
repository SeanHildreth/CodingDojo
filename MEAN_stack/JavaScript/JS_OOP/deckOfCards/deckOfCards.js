class Card {
    constructor(value, name, suit) {
        this.value = value;
        this.name = name;
        this.suit = suit;
    }

    Show() {
        console.log(this);
    }
}

class Deck {
    constructor() {
        this.names = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        this.deck = [];
        for(let suit = 0; suit < this.suits.length; suit++) {
            for(let name = 0; name < this.names.length; name++) {
                this.deck.push(new Card(name + 1, this.names[name], this.suits[suit]));
            }
        }
        this.deck = this.shuffle(this.deck);
        return this;
    }

    shuffle(arr) {
        var a = arr.length, temp, idx;
        while(a) {
            idx = Math.floor(Math.random() * a--);
            temp = arr[a];
            arr[a] = arr[idx];
            arr[idx] = temp;
        }
        return arr;
    }

    reset() {
        this.deck = new Deck();
    }

    deal() {
        if(this.deck != 0) {
            var card = this.deck.pop();
            return card;
        } else {
            return null;
        }
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    takeCard(arr) {
        this.hand.push(arr.deal());
        return this;
    }

    discard() {
        if(this.hand.length > 0) {
            this.hand.pop();
        } else {
            console.log('Hand is empty!');
        }
        return this;
    }
}


const newDeck = new Deck();
console.log(newDeck instanceof Deck);
console.log(newDeck);


var sean = new Player("Sean");
var clark = new Player("Clark");

sean.takeCard(newDeck).takeCard(newDeck).takeCard(newDeck).takeCard(newDeck);
clark.takeCard(newDeck).takeCard(newDeck).takeCard(newDeck).takeCard(newDeck);


console.log(sean.hand);
console.log(clark.hand);

sean.discard();

console.log(sean.hand);