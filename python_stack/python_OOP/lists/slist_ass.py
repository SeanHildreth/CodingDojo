class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class slist:
    def __init__(self, value):
        node = Node(value)
        self.head = node
    def addNode(self, value):
        node = Node(value)
        pointer = self.head
        while(pointer.next != None):
            pointer = pointer.next
        pointer.next = node
        return self
    def printAllValues(self, msg=' '):
        pointer = self.head
        print('\n\nHead points to ', id(self.head))
        print('Printing the values in the list ----', msg, '----')
        while(pointer.next != None):
            print(id(pointer), pointer.value, id(pointer.next))
            pointer = pointer.next
        print(id(pointer), pointer.value, id(pointer.next))
    def removeNode(self, value):
        pointer = self.head
        while(pointer.next != None):
            if pointer.value == value:
                self.head = self.head.next
            elif pointer.next.value == value:
                if pointer.next.next == None:
                    pointer.next = None
                    return self
                else:
                    pointer.next = pointer.next.next
            pointer = pointer.next
        return self
    def insertNode(self, value, index):
        pointer = self.head
        if index == 0:
                node = Node(value)
                node.next = self.head
                self.head = node
        elif index > 0:
            count = 0
            while (count < index - 1):
                print(id(pointer))
                pointer = pointer.next
                count += 1
                print(count)
            node = Node(value)
            node.next = pointer.next
            pointer.next = node
        return self


list = slist(5)
list.addNode(7)
list.addNode(7)
list.addNode(9)
list.addNode(7)
list.addNode(1)
list.removeNode(9) # removes 9, which is one of the middle nodes in the list
list.removeNode(5) # removes 5, which is the first value in the list
list.removeNode(1) # removes 1, which is the last node in the list
list.addNode(7)
list.addNode(7)
list.addNode(7)
list.addNode(7)
list.addNode(7)
list.addNode(7)
list.addNode(7)
list.insertNode(21, 0)
list.insertNode(21, 6)
list.insertNode(21, 12)
list.printAllValues("List")