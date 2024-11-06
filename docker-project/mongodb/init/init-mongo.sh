#!/bin/bash
echo "yes it works"
mongoimport  --username mongodb --password mongodb --db books --collection books --file /docker-entrypoint-initdb.d/data.json --authenticationDatabase admin --jsonArray
