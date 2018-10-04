class Card:
    def __init__(self, value, type):
        self.value = value
        self.type = type
    def show(self):
        print(self.value, "of", self.type)
class Deck:
    def __init__(self, name):
        self.deck = []
        self.name = name
        for i in ["clubs", "diamonds", "hearts", "spades"]:
            for j in range(1,14):
                if j == 1:
                    self.deck.append( Card('Ace', i))
                elif j == 11:
                    self.deck.append( Card('Jack', i))
                elif j == 12:
                    self.deck.append( Card('Queen', i))
                elif j == 13:
                    self.deck.append( Card('King', i))
                else:
                    self.deck.append( Card(j, i ) )
    def show(self):
        print("\n", "*"*30, self.name, "*"*30)
        for card in self.deck:
            card.show()
d1 = Deck("First Deck")
d1.show()
d2 = Deck("Second Deck")
d2.show()
