# Transportation Mode Selection
"""
Problem: Choose a mode of transportation based on the distance (e.g., < 3 km: walk,
3 -15 km: Bike > 15 km: Car)
"""
distance = 5

if distance < 3:
  transport = "walk"
elif distance < 15:
  transport = "Bike"
else: 
  transport = "car"

print(transport)