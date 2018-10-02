def bubbleSort(arr):
    for j in range(len(arr)-1):
        # print('\n\n', '-'*50, 'Iteration', j)
        for i in range(len(arr)-1-j):
            # print('\n', '*'*80, '\nindex ', i, 'value', arr[i])
            # print('\n', '*'*80, '\ncomparing', arr[i], arr[i+1])
            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]
                # print('swapped', arr[i], arr[i+1])
                # print('array is now', arr)
            # else:
                # print('no need to swap', arr[i], arr[i+1])
    return arr



arr = [9,7,6,8,4,5,6,2,3,4,1,4,5,6,7,3,4,5,4,3,6,5]

print(bubbleSort(arr))