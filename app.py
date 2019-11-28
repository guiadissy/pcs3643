from flask import Flask
from flask_restful import Api
from RequestControler import RequestControler

app = Flask(__name__)
api = Api(app)
@app.route("/")
def home():
  return 'Hello, Flask!'

api.add_resource(RequestControler,'/Consulta')