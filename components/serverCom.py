import sys
import serial

# Die Argumente des Child-Prozesses erhalten
child_arguments = sys.argv[1:]

# Die Argumente des Child-Prozesses anzeigen
print("Argumente des Child-Prozesses:", child_arguments)

ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=2)

ser.write(child_arguments)
ser.close()
