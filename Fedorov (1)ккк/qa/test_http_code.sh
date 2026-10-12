#!/bin/bash
source ~/qa/check.sh

check "HTTP-код ответа = 200" \
    bash -c "[ \"\$(curl -s -o /dev/null -w '%{http_code}' http://localhost:8080/users.csv)\" = '200' ]"

echo "Пройдено: $PASS, Провалено: $FAIL"
