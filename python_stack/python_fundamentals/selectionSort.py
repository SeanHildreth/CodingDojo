def selectionSort(arr):
    for y in range(len(arr)):
        mini = y
        for z in range(y+1, len(arr)):
            if arr[mini] > arr[z]:
                mini = z
        temp = arr[y]
        arr[y] = arr[mini]
        arr[mini] = temp
    return arr
                

myArr = [1,5,4,8,0,6,7,3]
                

print(selectionSort(myArr))