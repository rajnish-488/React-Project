from flask import Flask, jsonify
from fun import *
app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route('/dibatese/<int:x1>/<int:x2>/<int:x3>/<int:x4>/<int:x5>/<int:x6>/<int:x7>/<int:x8>/')
def find(x1, x2, x3, x4, x5, x6, x7, x8):
    x = []
    x.append(x1)
    x.append(x2)
    x.append(x3)
    x.append(x4)
    x.append(x5)
    x.append(x6)
    x.append(x7)
    x.append(x8)
    y = loaddata(x)
    val = 'YES'
    if y < 0.5:
        val = 'NO'
    else:
        val = 'YES'
    p = str(y[0][0]*100)
    result = {
        "chance": val,
        "ratio": p,
        "serverIP": "123.34.456.67"
    }

    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)
