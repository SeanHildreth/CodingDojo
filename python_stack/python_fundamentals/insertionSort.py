def insertionSort(arr):
    for y in range(1, len(arr)):
        x = arr[y]
        z = y-1
        while z >= 0 and x < arr[z]:
            arr[z+1] = arr[z]
            z -= 1
        arr[z+1] = x
    return arr




myArr = [6,5,3,1,8,7,2,4]

print(insertionSort(myArr))