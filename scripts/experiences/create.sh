#!/bin/bash

API="http://localhost:4741"
URL_PATH="/experiences"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "experience": {
      "name": "'"${NAME}"'",
      "eventType": "'"${EVENTTYPE}"'",
      "timeRequired": "'"${TIMEREQUIRED}"'",
      "location": "'"${LOCATION}"'",
      "cost": "'"${COST}"'",
      "details": "'"${DETAILS}"'",
      "completed": "'"${COMPLETED}"'"
    }
  }'

echo
