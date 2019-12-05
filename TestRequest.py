from Request import RequestModel
import json
schema=RequestModel()
data="{'price': '12', 'state': 'new', 'obligatory': 'a', 'additional': 'd', 'activity': 'a'}"
data = data.replace("'", "\"")
print(data)
res = schema.load(json.loads(data))
response, error = res.validate()
if not error:
    schema.addValue(res)
    schema.getValues()

