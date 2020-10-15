userInput = input('Enter 1 or 2: ')

if userInput == "1":
    print("Hello World")
    print("How are you?")
elif userInput == 2:
    print("python Rocks!")
    print("I love Python")
else:
    print("You did not enter a valid number")

for i in range(12):
    print(i)


newString = "Hello World".replace("World", "Universe")
print(newString)

