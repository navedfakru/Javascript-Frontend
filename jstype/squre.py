""" 
def squre(n):
  for i in range(n):
    if(i == 0 or i == n - 1):
      print('X ' * (n - 1))
    else:
      print('X ' + "O " * (n - 3) + 'X')
squre(7)

"""

num1 = 0.1
num2 = 0.2

print(num1 + num2)