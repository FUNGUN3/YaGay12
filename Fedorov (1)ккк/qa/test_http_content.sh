#!/bin/bash
source ~/qa/check.sh

check "Сервер отдаёт запись про Ivan" \
    bash -c "curl -s http://localhost:8080/users.csv | grep -q 'Ivan'"

echo "Пройдено: $PASS, Провалено: $FAIL"

