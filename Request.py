
import sqlalchemy as db

class RequestModel():
	__tablename__='requests'


	def __init__(self):
		self.nome='name'
		

	def add(self):
		print('added Entry')
		#db.session.comit()


