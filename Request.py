from marshmallow import Schema, fields, post_load
import json
import sqlalchemy as db
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String

Base = declarative_base()


class RequestModel(Schema):
    price = fields.Str()
    state = fields.Str()
    obligatory = fields.Str()
    additional = fields.Str()
    activity = fields.Str()
    engine = create_engine('mysql://root:Perso387382!@localhost/qualcomp')
    Session = sessionmaker(bind=engine)
    session = Session()

    @post_load
    def create(self, data, **kwargs):
        return Request(**data)

    def addValue(self, req):
        self.session.add(req)
        self.session.commit()

    def getValues(self):
        for instance in self.session.query(Request).order_by(Request.idOrder):
            print(instance)


class Request(Base):
    __tablename__ = 'order'
    idOrder = Column(Integer, primary_key=True)
    idState = Column(Integer)
    idCategory = Column(Integer)
    price = Column(String)
    obligatory = Column(String)
    additional = Column(String)
    activity = Column(String)

    def __init__(self, price, state, obligatory, additional, activity):
        self.price = price
        if(state=="new"):
            self.idState = 0
        else:
            self.idState = 1
        self.obligatory = obligatory
        self.additional = additional
        self.activity = activity
        self.idCategory = 1

    def __repr__(self):
        return "<Request(price='%s', obligatory='%s', additional='%s')>" % (
            self.price, self.obligatory, self.additional)

    def validate(self):
        d = dict()
        d["price"] = self.valid(self.price, True)
        d["state"] = self.valid(self.idState, True)
        d["obligatory"] = self.valid(self.obligatory)
        d["additional"] = self.valid(self.additional)
        d["activity"] = self.valid(self.activity)
        for key in d:
            if d[key] == "Invalid":
                return json.dumps(d), True
        return json.dumps(d), False

    def valid(self, val, numeric=False):
        if val == "" or (numeric and not is_number(val)):
            return "Invalid"
        else:
            return "OK"


def is_number(s):
    try:
        float(s)
        return True
    except ValueError:
        return False
