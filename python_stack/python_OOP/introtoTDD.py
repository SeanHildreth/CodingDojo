def reverseList(arr):
    length = int(len(arr)/2)
    for idx in range(length):
        arr[idx], arr[len(arr)-1-idx] = arr[len(arr)-1-idx], arr[idx]
    return arr

    