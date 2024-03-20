import sys
import serial
import time

arguments = sys.argv[1]


ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)
parentStop = false
isMixing = true
time.sleep(2)
ser.reset_input_buffer()
ser.write(b""arguments)

while isMixing:
    line = ser.readline().decode('utf-8').rstrip()
    if (line == "fertig"):
        isMixing = false
    if (parentStop == true):
        isMixing = false
        ser.reset_input_buffer()
        ser.write(b"abbrechen")

        


print(arguments, flush=True, end='')