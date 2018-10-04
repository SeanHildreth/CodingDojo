class Node:
    def __init__(self, value):
        print('Node(__init__)', 'self:', id(self), 'value:', value)
        self.value = value
        print('Node(self.value):', self.value)
        self.next = None
        print('Node(self.next)None:', id(self.next))
    
class SList:
    def __init__(self, value):
        print('SList(__init__)', 'self:', id(self), 'value:', value)
        node = Node(value)
        print('SList(__init__)node:', id(node))
        self.head = node
        print('SList(__init__)self.head:', id(self.head))

    
    def addNode(self, value):
        print('addNode', 'self:', id(self), 'value:', value)
        node = Node(value)
        print('addNode(node):', id(node))
        runner = self.head
        print('addNode(runner):', id(runner))
        while(runner.next != None):
            print('addNode(while(runner = *b)):', id(runner))
            runner = runner.next
            print('addNode(while(runner = *a)):', id(runner.next))
        runner.next = node
        print('addNode(runner.next):', id(runner.next))
     
    def printAllValues(self, msg=""):
        runner = self.head          # create a runner     
        print('\n\n' + '*'*50)
        print("\n\nhead points to ", id(self.head))
        print("Printing the values in the list ---", msg,"---")
        while(runner.next != None):
            print(id(runner), runner.value, id(runner.next))
            runner = runner.next        
        print(id(runner), runner.value, id(runner.next))
      
print("\n\n\n\n================== START OF THE PROGRAM ================")       
print('\n\ncreating list with head node Alice', '*'*40)
list = SList('Alice')
print('\n\ncreating node Chad', '*'*40)
list.addNode('Chad')
print('\n\ncreating node Debra', '*'*40)
list.addNode('Debra')
print('\n\ncreating node Eric', '*'*40)
list.addNode('Eric')
print('\n\ncreating node Fred', '*'*40)
list.addNode('Fred')
     
list.printAllValues("Attempt 1")
