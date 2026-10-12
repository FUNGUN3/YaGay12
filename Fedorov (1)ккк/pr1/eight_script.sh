#!/bin/bash
TARGET="192.168.1.1"

echo "Сканирование портов на $TARGET"
for port in 22 80 443 8080; do
    nc -z -w 1 $TARGET $port 2>/dev/null
    if [ $? -eq 0 ]; then
		echo "Порт $port открыт"
    fi
done
