import RPi.GPIO as GPIO
import time
def init(cs, mosi, miso, clk):
	GPIO.setwarnings(False)
	GPIO.setmode(GPIO.BCM)
	GPIO.setup(cs, GPIO.OUT)
	GPIO.setup(mosi, GPIO.OUT)
	GPIO.setup(miso, GPIO.IN)
	GPIO.setup(clk,GPIO.OUT)
def sendCmd(cs, mosi, clk, command):
	GPIO.output(cs, GPIO.HIGH)
	GPIO.output(cs, GPIO.LOW)
	GPIO.output(clk, GPIO.LOW)
	for i in range (4):
		if(command & 0x80):
			GPIO.output(mosi, GPIO.HIGH)
		else:
			GPIO.output(mosi, GPIO.LOW)
		command = command << 1
		GPIO.output(clk, GPIO.HIGH)
		GPIO.output(clk, GPIO.LOW)
def readData(miso, clk):
	value = 0
	for i in range(13):
		GPIO.output(clk, GPIO.HIGH)
		GPIO.output(clk, GPIO.LOW)
		value = value << 1
		if GPIO.input(miso):
			value = value | 0x1
		else:
			value = value | 0x0
	# discard the first bit
	value = value >> 1
	return value
def getIlluminance():
	cs = 8 # board.SPI_CE0_N
	mosi = 10 # board.MOSI
	miso = 9 # board.MISO
	clk = 11 # board.CLK
	init(cs, mosi, miso, clk)
	sendCmd(cs, mosi, clk, ((0<<1)|0x0d)<<4)
	return int(readData(miso, clk))
#while(True):
#	print("current illuminance is %d" % getIlluminance())
	#return getIlluminance()
