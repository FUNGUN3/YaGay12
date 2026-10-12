#!/bin/bash
# setup.sh
# qa_test

WORKDIR="$HOME/qa_test_Fed"
mkdir -p "$WORKDIR"
echo "[CREATE] $WORKDIR"

mkdir -p "$WORKDIR/logs"
mkdir -p "$WORKDIR/reports"

touch "$WORKDIR/logs/test.log"

if [ -d "$WORKDIR" ] && [ -d "$WORKDIR/logs" ] && [ -d "$WORKDIR/reports" ]; then
    echo "[OK] Структура создана:"
    ls -la "$WORKDIR"
else
    echo "[FAIL] Не удалось создать структуру в $WORKDIR"
    exit 1
fi

echo "[$(date '+%F %T')] Окружение создано: $WORKDIR" | tee -a "$WORKDIR/logs/test.log"
