class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None

class dllist:
    def __init__(self, value):
        node = Node(value)
        self.head = node
    def addNode(self, value):
        node = Node(value)
        current = self.head
        while current.next != None :
            current = current.next
        current.next = node
        node.prev = current
        return self
    def printList(self, msg = ''):
        current = self.head
        print('\n\nHead points to ', id(self.head))
        print('Printing the values in the list ----', msg, '----')
        while current.next != None:
            print('Current id:',id(current), current.value, 'Next id:', id(current.next), 'Previous id:', id(current.prev))
            current = current.next
        print('Current id:',id(current), current.value, 'Next id:', id(current.next), 'Previous id:', id(current.prev))
    def removeNode(self, value = None, idx = None):
        current = self.head
        if idx != None:
            if idx == 0:
                current.next.prev = None
                self.head = current.next
            elif idx > 0:
                count = 0
                while count < idx -1:
                    current = current.next
                    count += 1
                if current.next.next == None:
                    current.next = None
                else:
                    current.next.next.prev = current
                    current.next = current.next.next
        else:
            while current.next != None:
                if current.value == value:
                    self.head = self.head.next
                    current.next.prev = None
                elif current.next.value == value:
                    if current.next.next == None:
                        current.next = None
                        return self
                    else:
                        current.next = current.next.next
                        current.next.next.prev = current
                current = current.next
        return self
    def insertNode(self, value, idx):
        current = self.head
        if idx == 0:
            node = Node(value)
            node.next = self.head
            self.head.prev = node
            self.head = node
        elif idx > 0:
            count = 0
            while count < idx - 1:
                current = current.next
                count += 1
            node = Node(value)
            if current.next == None:
                current.next = node
                node.prev = current
            else:
                node.next = current.next
                node.prev = current
                current.next.prev = node
                current.next = node
        return self


list = dllist(0)
list.addNode(1)
list.addNode(2)
list.addNode(3)
list.addNode(4)
list.addNode(5)
list.addNode(6)
list.addNode(7)
list.addNode(8)
list.addNode(9)
list.removeNode(0)
list.removeNode(5)
list.removeNode(9)
list.removeNode(idx = 3)
list.removeNode(None, 3)
list.insertNode(0,0)
list.insertNode(4,4)
list.insertNode(5,5)
list.insertNode(6,6)
list.insertNode(9,9)
list.printList('List')