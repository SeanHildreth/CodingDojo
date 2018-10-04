class Product:
    def __init__(self, price, name, weight, brand):
        self.price = price
        self.name = name
        self.weight = weight
        self.brand = brand
        self.status = 'For Sale'
    def sell(self):
        self.status = 'Sold'
        return self
    def add_tax(self, tax):
        total = self.price * tax + self.price
        return total
    def return_item(self, reason_for_return):
        if reason_for_return == 'defective':
            self.status = 'defective'
            self.price = 0
        elif reason_for_return == 'like new':
            self.status = 'For Sale'
        elif reason_for_return == 'opened':
            self.status = 'used'
            self.price *= .8
        return self
    def display_info(self):
        print('*'*80)
        print('Price: ', self.price)
        print('Name: ', self.name)
        print('Weight: ', self.weight)
        print('Brand: ', self.brand)
        print('Status: ', self.status)
        return self

bicycle = Product(1000, 'HyRoad', '10lbs', 'Giant')
bicycle.display_info()

chain = Product(20, 'Bike Chain', '1lb', 'Giant')
chain.display_info()

sprocket = Product(50, 'Rear Sprocket', '5lb', 'Schwinn')
sprocket.display_info()

chain.price = 19.99
sprocket.brand = 'Bell'
bicycle.name = 'Off-roader'

chain.display_info()
sprocket.display_info()
bicycle.display_info()