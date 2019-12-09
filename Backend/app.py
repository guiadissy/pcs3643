from flask import Flask
from flask_restful import Api
from RequestControler import RequestControler
from flask_cors import CORS, cross_origin

app = Flask(__name__)
api = Api(app)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

api.add_resource(RequestControler,'/Consulta')