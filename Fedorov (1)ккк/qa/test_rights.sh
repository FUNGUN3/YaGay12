#!/bin/bash
source ~/qa/check.sh

check "Файл users.csv доступен для чтения" \
    test -r ~/qa/data/users.csv

echo "Пройдено: $PASS, Провалено: $FAIL"
