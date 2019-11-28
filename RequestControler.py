from flask_restful import Resource,reqparse
from Request import RequestModel

class RequestControler(Resource):
	parser=reqparse.RequestParser()
	parser.add_argument('item',type=str,required=True)

	def post(self):
		try:
			data=RequestControler.parser.parse_args()
			print(data)
			req= RequestModel()
			req.add()
		except Exception as e:
			print(e)
