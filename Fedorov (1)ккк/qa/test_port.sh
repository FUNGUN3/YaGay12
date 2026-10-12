#!/bin/bash
source ~/qa/check.sh

check "Порт 8080 слушается" \
    timeout 2 bash -c "</dev/tcp/localhost/8080"

echo "Пройдено: $PASS, Провалено: $FAIL"
