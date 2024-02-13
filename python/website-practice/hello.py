from flask import Flask

app = Flask(__name__)

intro = "hello intro python"

@app.route("/")
def hello_world():
    return """"
    <h1>Python Learning</h1>
    <p>Hello, World!</p>
     
    """

@app.route('/hello')
def hello():
    return 'Hello, World'