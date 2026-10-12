#!/bin/bash
source ~/qa/check.sh

check "HTTP-сервер отвечает на порту 8080" \
    curl -s -o /dev/null --max-time 3 http://localhost:8080/users.csv

echo "Пройдено: $PASS, Провалено: $FAIL"
