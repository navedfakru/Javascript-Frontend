number = 22

isPrime = True

if number > 1:
  for i in range(2, number):
    if (number % i) == 0:
      isPrime = False
      break
else:
  isPrime = False

if isPrime:
  print("Prime number is:", number)
else:
  print("This not prime number")