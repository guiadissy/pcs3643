# Consultant model

from dao import db, Base


class Consultant(Base):
    __tablename__ = 'consultores'
    id_consultant = db.Column(db.Integer, primary_key=True)
    cpf = ''
    email = ''
    rating = 0
    orders = []

    def __init__(self, id_consultant):
        self.id_consultant = id_consultant
