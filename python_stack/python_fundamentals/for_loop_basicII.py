def makeItBig(arr=[]):
    for index, x in enumerate(arr):
        if (x > 0):
            arr[index] = "big"
    return arr

def countPos(arr=[]):
    count = 0
    for index, x in enumerate(arr):
        if (x > 0):
            count += 1
    arr[len(arr)-1] = count
    return arr

def sumTotal(arr=[]):
    sum = 0
    for index, x in enumerate(arr):
        sum += x
    return sum

def average(arr=[]):
    sum = 0
    for index, x in enumerate(arr):
        sum += x
    sum /= len(arr)
    return sum

def length(arr=[]):
    return len(arr)

def minimum(arr=[]):
    min = arr[0]
    if len(arr) < 1:
        return False
    for index, x in enumerate(arr):
        if (x < min):
            min = x
    return min

def maximum(arr=[]):
    max = arr[0]
    if len(arr) < 1:
        return False
    for index, x in enumerate(arr):
        if (x > max):
            max = x
    return max

def ultimateAnalyze(arr=[]):
    min = arr[0]
    max = arr[0]
    sumTotal = 0
    avg = 0
    for index, x in enumerate(arr):
        sumTotal += x
        if (x < min):
            min = x
        elif (x > max):
            max = x
    avg = sumTotal / len(arr)
    dictionary = {'sumTotal':sumTotal, 'average':avg, 'minimum':min, 'maximum':max, 'length':len(arr)}
    return dictionary

def revList(arr=[]):
    i = len(arr) - 1
    t = int(len(arr)/2)
    for x in range(0, t):
        temp = arr[i]
        arr[i] = arr[x]
        arr[x] = temp
        i -= 1
    return arr