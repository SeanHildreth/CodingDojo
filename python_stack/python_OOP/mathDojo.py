class mathDojo:
    def __init__(self):
        self.result = 0
    def add(self, *args):
        for num in args:
            self.result += num
        return self
    def subtract(self, *args):
        for num in args:
            self.result -= num
        return self

md = mathDojo()

x = md.add(2).add(2,5,1).subtract(3,2).result
print(x)