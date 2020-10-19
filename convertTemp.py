fahrenheit = input('What is the temperature in Fahrenheit?  ')

#removing non number possibility
if fahrenheit.isnumeric() == False:
    print('Input is not a number.')
    exit()

#applying the formula
fahrenheit = int(fahrenheit)

celsius = int((fahrenheit - 32) * 5/9)
print('Temperature in celsius is ' + str(celsius))
