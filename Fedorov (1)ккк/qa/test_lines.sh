#!/bin/bash
source ~/qa/check.sh

check "Файл users.csv содержит 3 строки" \
    bash -c "[ \"\$(wc -l < ~/qa/data/users.csv)\" -eq 3 ]"

echo "Пройдено: $PASS, Провалено: $FAIL"
