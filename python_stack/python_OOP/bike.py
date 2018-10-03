class Bike:
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
    def displayInfo(self):
        print('Price = $', self.price)
        print('Max Speed = ', self.max_speed)
        print('Total Miles = ', self.miles)
    def ride(self):
        print('Riding 10 miles')
        self.miles += 10
        return self
    def reverse(self):
        print('Reversing 5 miles')
        self.miles -= 5
        if self.miles < 0:
            self.miles = 0
        return self

bike1 = Bike(2000, '45mph')
bike2 = Bike(8000, '180mph')
bike3 = Bike(9999, '240mph')

bike1.ride().ride().ride().reverse()
bike1.displayInfo()

bike2.ride().ride().reverse().reverse()
bike2.displayInfo()

bike3.reverse().reverse().reverse()
bike3.displayInfo()