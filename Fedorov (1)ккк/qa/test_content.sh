#!/bin/bash
source ~/qa/check.sh

check "В файле есть заголовок 'id,name,status'" \
    grep -q "id,name,status" ~/qa/data/users.csv

echo "Пройдено: $PASS, Провалено: $FAIL"
