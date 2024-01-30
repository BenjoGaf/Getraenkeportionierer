
import sys
import serial
import time

child_arguments = sys.argv[1:]


ser = serial.Serial('/dev/ttyUSB0', 9600)
ser.timeout = 1



ser.write(test.encode())
time.sleep(0.5)

value = ser.readline().decode('ascii')

# print(value)


ser.close()
