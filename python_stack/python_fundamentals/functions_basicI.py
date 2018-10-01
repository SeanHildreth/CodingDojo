def a():
    return 5
print(a())
# predicted output:
5

# console output
5

def a():
    return 5
print(a()+a())
# predicted output:
10

# console output
10

def a():
    return 5
    return 10
print(a())
# predicted output:
5

# console output
5

def a():
    return 5
    print(10)
print(a())
# predicted output:
5

# console output
5

def a():
    print(5)
x = a()
print(x)
# predicted output:
5
5

# console output
5
none

def a(b,c):
    print(b+c)
print(a(1,2) + a(2,3))
# predicted output:
8

# console output
3
5
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unsupported operand type(s) for +: 'NoneType' and 'NoneType'

def a(b,c):
    return str(b)+str(c)
print(a(2,5))
# predicted output:
25

# console output
25

def a():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(a())
# predicted output:
100
10

# console output
100
10

def a(b,c):
    if b<c:
        return 7
    else:
        return 14
    return 3
print(a(2,3))
print(a(5,3))
print(a(2,3) + a(5,3))
# predicted output:
7
14
21

# console output
7
14
21

def a(b,c):
    return b+c
    return 10
print(a(3,5))
# predicted output:
8

# console output
8

b = 500
print(b)
def a():
    b = 300
    print(b)
print(b)
a()
print(b)
# predicted output:
500
500
300
500

# console output
500
500
300
500

b = 500
print(b)
def a():
    b = 300
    print(b)
    return b
print(b)
a()
print(b)
# predicted output:
500
500
300
300
500

# console output
500
500
300
300
500

b = 500
print(b)
def a():
    b = 300
    print(b)
    return b
print(b)
b=a()
print(b)
# predicted output:
500
500
300
300

# console output
500
500
300
300

def a():
    print(1)
    b()
    print(2)
def b():
    print(3)
a()
# predicted output:
1
3
2

# console output
1
3
2

def a():
    print(1)
    x = b()
    print(x)
    return 10
def b():
    print(3)
    return 5
y = a()
print(y)
# predicted output:
1
3
5
10

# console output
1
3
5
10
