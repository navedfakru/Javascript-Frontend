# n = int(input("Enter number for calculate sum of even: "))
n = 10
sum_even = 0
for num in range(0, n+1):
  if num % 2 == 0:
    sum_even += num
print("Sum of Even:", sum_even)