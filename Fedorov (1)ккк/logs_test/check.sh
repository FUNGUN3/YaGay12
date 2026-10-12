#!/bin/bash
PASS=0; FAIL=0
check() {
    local name="$1"; shift
    if "$@" >/dev/null 2>&1; then
        echo "PASS: $name"; PASS=$((PASS + 1))
    else
        echo "FAIL: $name"; FAIL=$((FAIL + 1))
    fi
}
