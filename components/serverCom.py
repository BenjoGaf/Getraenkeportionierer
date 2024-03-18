import sys
import serial
import time

arguments = sys.argv[1]


# ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)
# ser.reset_input_buffer()
# time.sleep(2)
# ser.write(b""arguments+"\n")
# ser
# line = ser.readline().decode('utf-8').rstrip()


print(arguments, flush=True, end='')