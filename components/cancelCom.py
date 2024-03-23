import sys
import serial

# ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)

sys.stdout.write("inCancelCom")

dataToSendFormatted = 'abbrechen'.encode('utf-8')

# ser.reset_input_buffer()
# ser.write(dataToSendFormatted)