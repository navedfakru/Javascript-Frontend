def even_generator(limit):
  for i in range(2, limit + 1, 2):
    yield i
  
print(even_generator(2))

for num in even_generator(2):
  print(num)