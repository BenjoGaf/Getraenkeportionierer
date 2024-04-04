import sys
import serial
import time

arguments = sys.argv[1]


ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)
time.sleep(1)
isMixing = True
getInfo = "nothing"
dataToSendFormatted = arguments.encode('utf-8')

ser.reset_input_buffer()
ser.write(dataToSendFormatted)


while (isMixing == True):
    line = ser.readline().decode('utf-8').rstrip()
    sys.stdout.write("inServerCom")
    
    if (line == "fertig"):
        sys.stdout.write("fertig")
        isMixing = False

    time.sleep(3)
    isMixing = False