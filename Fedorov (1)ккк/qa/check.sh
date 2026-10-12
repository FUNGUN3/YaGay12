#!/bin/bash
#Функции проверки. $! - имя теста, дальше - команда для выполнения.

PASS=0  # счетчик пройденных
PASS=0  # счетчик проваленных
check() {
    local name="$1"
    shift
    if "$@" >/dev/null 2>&1; then
        echo "PASS: $name"
        PASS=$((PASS + 1))
    else
        echo "FAIL: $name"
        FAIL=$((FAIL + 1))
    fi
}
