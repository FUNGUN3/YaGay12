#!/bin/bash
source ~/qa/check.sh


check "Файл users.csv существует и не пуст" \
    test -s ~/qa/data/users.csv

echo "Пройдено: $PASS, Провалено: $FAIL"
