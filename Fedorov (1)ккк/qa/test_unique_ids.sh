#!/bin/bash
source ~/qa/check.sh

check "ID пользователей в users.csv уникальны" \
    bash -c "[ -z \"\$(cut -d',' -f1 ~qa/data/uesrs.csv | sort | uniq -d)\"]"

echo "Пройдено: $PASS, Провалено: $FAIL"
