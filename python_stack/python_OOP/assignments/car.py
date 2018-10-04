class Car:
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        if price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
    def display_all(self):
        print('Price: ', self.price)
        print('Speed: ', self.speed)
        print('Fuel: ', self.fuel)
        print('Mileage: ', self.mileage)
        print('Tax: ', self.tax)


car1 = Car(2000, '35mph', 'Full', '15mpg')
car1.display_all()
car2 = Car(3000, '45mph', 'Not Full', '25mpg')
car2.display_all()
car3 = Car(4000, '55mph', 'Half Full', '35mpg')
car3.display_all()
car4 = Car(5000, '65mph', 'Full', '35mpg')
car4.display_all()
car5 = Car(6000, '75mph', '1/8th Full', '55mpg')
car5.display_all()
car6 = Car(7000, '85mph', '3/4th Full', '5mpg')
car6.display_all()

