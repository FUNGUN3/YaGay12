#!/bin/bash

DIR="$HOME/qa_test_Fed"
REPORT="$DIR/reports/summary_$(date +%F_%H%M).txt"

{
echo "======================================"
echo " СВОДНЫЙ ОТЧЁТ ТЕСТИРОВАНИЯ"
echo " Дата: $(date '+%F %T')"
echo " Хост: $(hostname)"
echo "======================================"
} > "$REPORT"

bash "$DIR/os_check.sh"        >> "$REPORT" 2>&1
bash "$DIR/port_check.sh"      >> "$REPORT" 2>&1
bash "$DIR/web_test.sh"        >> "$REPORT" 2>&1
bash "$DIR/integrity_check.sh" >> "$REPORT" 2>&1
bash "$DIR/log_check.sh"       >> "$REPORT" 2>&1

echo "Отчёт сохранён: $REPORT"
