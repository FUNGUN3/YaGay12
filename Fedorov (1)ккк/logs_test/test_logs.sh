#!/bin/bash
source ~/logs_test/check.sh
LOG=~/logs_test/app.log

check "Лог-файл существует"       test -s "$LOG"
check "В логе есть записи ERROR"  grep -q "ERROR" "$LOG"
check "Ошибок не больше 5"        bash -c "[ \$(grep -c 'ERROR' $LOG) -le 5 ]"
check "Есть INFO о запуске"       grep -q "Сервер запущен" "$LOG"
check "Нет слова FATAL"           bash -c "! grep -q 'FATAL' $LOG"
check "Записи содержат дату"      grep -qE "^[0-9]{4}-[0-9]{2}-[0-9]{2}" "$LOG"

echo "Пройдено: $PASS, Провалено: $FAIL"
