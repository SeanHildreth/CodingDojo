def countDown(num):
    arr = []
    for num in range(num, -1, -1):
        arr.append(num)
    return arr

def printReturn(arr=[]):
    print(arr[0])
    return(arr[1])

def sumLen(arr=[]):
    return arr[0] + len(arr)

def greater(arr=[]):
    arr2 = []
    if len(arr) < 2:
        return False
    else:
        for val in arr:
            if val > arr[1]:
                arr2.append(val)
    print(len(arr2))
    return arr2

def lengthAndValue(a,b):
    arr = []
    for c in range(a):
        arr.append(b)
    return arr