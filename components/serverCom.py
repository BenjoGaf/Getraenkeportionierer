import sys
import serial
import time

arguments = sys.argv[1]


# ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)
parentStop = False
isMixing = False
time.sleep(0.1)
# ser.reset_input_buffer()
# ser.write(b""arguments)

while isMixing:
    # line = ser.readline().decode('utf-8').rstrip()
    if (line == "fertig"):
        isMixing = False
    if (parentStop == True):
        isMixing = False
        ser.reset_input_buffer()
        ser.write(b"abbrechen")
        parentStop = False


        


print(arguments, flush=True, end='')