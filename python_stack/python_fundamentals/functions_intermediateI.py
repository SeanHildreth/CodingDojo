def randInt(min=0, max=0):
    import random
    if (min == 0 and max == 0):
        print(int(random.random()*100))
    elif (min > 0 and max > 0):
        print(int(random.random()*max-min)+min)
    elif (min > 0):
        print(int(random.random()*50)+min)
    elif (max > 0):
        print(int(random.random()*max))
randInt(min=50,max=500)