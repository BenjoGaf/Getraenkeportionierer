import serial
import time

ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)
ser.reset_input_buffer()
time.sleep(2)
ser.write(b"Hello from Raspberry Pi!\n")
line = ser.readline().decode('utf-8').rstrip()
print(line, flush=True, end='')