class Animal:
    def __init__(self, name, health):
        self.name = name
        self.health = health
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
    def display_health(self):
        print('Health: ', self.health)
        return self

rat = Animal('Rat', 50)
rat.walk().walk().walk().run().run().display_health()


class Dog(Animal):
    def __init__(self, name):
        super().__init__(self, name)
        self.health = 150
    def pet(self):
        self.health += 5
        return self


buck = Dog('Buck')
buck.walk().walk().walk().run().run().pet().display_health()


class Dragon(Animal):
    def __init__(self, name):
        super().__init__(self, name)
        self.health = 170
    def fly(self):
        self.health -+ 10
        return self
    def display_health(self):
        super().display_health(self)
        print('I am a Dragon')

mouse = Animal('Mouse', 50)
mouse.walk().display_health()