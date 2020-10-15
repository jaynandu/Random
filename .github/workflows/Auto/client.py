print("What's up tell us your favorite veggies?")
print("Example input (separated by spaces):")
print("kale tomato cucumber broccoli")
data = input()

favs = data.split()

for food in favs:
  print("you said:", food)