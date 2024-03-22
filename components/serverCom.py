import sys
import serial
import time

arguments = sys.argv[1]


# ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)
parentStop = False
isMixing = True

cnt = 0

while (isMixing == True):
    cnt = cnt + 1
    if (cnt == 300):
        sys.stdout.write("Fertig")
        isMixing = False

# if (dataJS == "cancel"):
#     print("bhh", flush=True, end='')

# ser.reset_input_buffer()
# ser.write(b""arguments)
# sys.stdout.write(dataJS)

# data2JS = sys.stdin.read()

# while (isMixing == True):
#     # line = ser.readline().decode('utf-8').rstrip()
#     getInfo = sys.stdin.read()
    
#     sys.stdout.write("while")

#     if (getInfo == "cancel"):
#         print("gotCanceled", flush=True, end='')
#         ser.reset_input_buffer()
#         ser.write(b"abbrechen\n")
#         isMixing = False
        

    # if (line == "fertig"):
    #     isMixing = False
        

    # if (parentStop == True):
    #     isMixing = False
    #     ser.reset_input_buffer()
    #     ser.write(b"abbrechen\n")
    #     parentStop = False
    
    # time.sleep(1)


