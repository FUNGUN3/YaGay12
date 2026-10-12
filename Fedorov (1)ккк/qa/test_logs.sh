#!/bin/bash
source ~/qa/check.sh
check "Каталог ~/qa/logs сещуствует"
\
	test -d ~/qa/logs

echo "Пройдено: $PASS, Провалено: $FAIL"
