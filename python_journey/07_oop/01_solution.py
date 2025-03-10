class Car:
  total_car = 0

  def __init__(self, brand, model):
    self.__brand = brand
    self.__model = model
    Car.total_car += 1

  def get_brand(self):
    return self.__brand + " !"

  def full_name(self):
    return f"{self.__brand} {self.__model}"
  
  def fuel_type(self):
    return "Petrol or Diesel"
  
  @staticmethod
  def general_description():
    return "Cars are means of transport"
  
  @property
  def model(self):
    return self.__model

class ElectricCar(Car):
  def __init__(self, brand, model, battery_size):
    super().__init__(brand, model)
    self.battery_size = battery_size

  def fuel_type(self):
    return "Electric charge"

# my_tesla = ElectricCar("Tasla", "Model S", "85KWh")

# print(isinstance(my_tesla, ElectricCar))

# my_car = Car("Tata", "Safari")
# my_car.model = "City"
# safariThree = Car("Tata", "Nexco")


# print(safari.general_description())
# print(my_car.model)

# my_car = Car("Toyoto", "Corolla")
# print(my_car.brand)
# print(my_car.model)
# print(my_car.full_name())

# my_new_car = Car("Tata", "Safari")
# print(my_new_car.brand)
# print(my_new_car.model)

class Battery:
  def battery_info(self):
    return "This is Battery"

class Engine:
  def engine_info(self):
    return "This is engine"

class ElectricCarTwo(Battery, Engine, Car):
  pass

my_new_tesla = ElectricCarTwo("Tesla", "Model S")

print(my_new_tesla.battery_info())
print(my_new_tesla.engine_info())