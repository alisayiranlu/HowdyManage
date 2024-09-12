import csv
import json

with open('orderinfo.csv', 'r') as file:
    reader = csv.reader(file)
    headers = next(reader) # Read the header row
    
    data = []
    for row in reader:
        record = {}
        for i, value in enumerate(row):
            record[headers[i]] = value
        data.append(record)

# convert into JSON:
y = json.dumps(data)

# the result is a JSON string:
print(y)