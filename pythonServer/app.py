from flask import Flask,jsonify, make_response ,escape, request
import getLight as gL
import time


lightValue = 0

app = Flask(__name__)
@app.route('/')
def hello():
	name = request.args.get("name", "World")
	return f'Hello, {escape(name)}!'

@app.route('/getLightValue')
def refreshLight() :
	global lightValue
	lightValue = gL.getIlluminance()
	print("읽혀온 lightValue =",lightValue)
	return make_response( jsonify({"lightValue" : lightValue}) , 200)


if __name__ == "__main__":
	app.run(host="0.0.0.0", port=5000)
