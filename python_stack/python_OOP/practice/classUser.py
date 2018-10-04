class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.logged = True
    def login(self):
        self.logged = True
        print(self.name + " is logged in.")
        return self
    def logout(self):
        self.logged = False
        print(self.name + " is not logged in")
        return self
    def show(self):
        print(f"My name is {self.name}. You can email me at {self.email}.")
        return self







# declare a class and give it name User
class User:
    # the __init__ method is called every time a new object is created
    def __init__(self, name, email):
        # set some instance variables. Just like any variable we can call these anything
        self.name = name
        self.email - email
        self.logged = False
    # this is a method we created to help a user login
    def login(self):
        self.logged = True
        print(self.name + ' is logged in.')
        return self
#now create an instance of the class
new_user = User('Anna', 'anna@anna.com')
print(new_user.email)




# define class User
class User:
    # this method to run every time a new object is instantiated
    def __init__(self, name, email):
	# instance attributes 
        self.name = name
        self.email = email
        self.logged = True
    # login method changes the logged status for a single instance (the instance calling the method)
    def login(self):
        self.logged = True
        print(self.name + " is logged in.")
        return self
    # logout method changes the logged status for a single instance (the instance calling the method)
    def logout(self):
        self.logged = False
        print(self.name + " is not logged in")
        return self
    # print name and email of the calling instance
    def show(self):
        print("My name is {self.name}. You can email me at {self.email}.")
        return self
