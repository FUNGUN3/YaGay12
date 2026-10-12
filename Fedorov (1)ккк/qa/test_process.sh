#!/bin/bash
source ~/qa/check.sh


check "Процесс python3 http.server запущен" \
    pgrep -f "http.server 8080"

echo "Пройдено: $PASS, Провалено: $FAIL"
