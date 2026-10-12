#!/bin/bash
source ~/qa/check.sh

check "В ответе нет слова 'error'" \
    bash -c "! curl -s http://localhost:8080/users.csv | grep -qi 'error'"

echo "Пройдено: $PASS, Провалено: $FAIL"
