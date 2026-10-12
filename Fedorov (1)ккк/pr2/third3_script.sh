#!/bin/bash

echo "=== Цикл until ==="
count=1
until [ $count -gt 5 ]
do
    echo "Count -gt 5"
    count=$((count + 1))
done

echo "=== Ожидание запуска сервиса ==="
attempt=1
until ping -c 1 google.com &> /dev/null
do
    echo "Попытка $attempt: Сервис недоступен"
    sleep 2
    attempt=$((attempt + 1))
    if [ $attempt -gt 10 ]; then
        echo "Сервис не доступен после 10 попыток"
        exit 1
        fi
done
echo "Сервис доступен!"
