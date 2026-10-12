#!/bin/bash
source ~/qa/check.sh

check "В users.csv ровно 3 поля в заголовке" \
	bash -c "[ \"\$(awk -F',' 'NR==1{print NF}' ~/qa/data/users.csv)\" -eq 3 ]"



check "В users.csv ровно 3 поля в заголовке" \
        bash -c "[ \"\$(awk -F',' 'NF!=3' ~/qa/data/users.csv | wc -l)\" -eq 0 ]"

echo "Пройдено: $PASS, Провалено: $FAIL"
