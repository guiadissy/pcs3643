from flask_restful import Resource,reqparse
from Request import RequestModel
import json
from marshmallow import pprint


class RequestControler(Resource):
    parser=reqparse.RequestParser()
    parser.add_argument('req', type=str)

    def post(self):
        try:
            schema = RequestModel()
            data = RequestControler.parser.parse_args()['req']
            data = data.replace("'", "\"")
            print(data)
            res = schema.load(json.loads(data))
            response, error = res.validate()
            if not error:
                schema.addValue(res)
                return response, 200
            else:
                return response, 500
        except Exception as e:
            return json.dumps({"error": e}), 500
