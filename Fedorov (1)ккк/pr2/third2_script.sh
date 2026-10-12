#!/bin/bash
echo "=== Цикл while с условием ==="
counter=1
while [ $counter -le 5 ]
do
    echo "Счетчик: $counter"
    counter=$((counter + 1))
done

echo "=== Чтение файла построчно ==="
while IFS= read -r line
do
    echo "Строка: $line"
done < "example.txt"

echo "=== Бесконечный цикл (нажмите Ctrl+C для выхода) ==="
while true
do
    echo "Цикл выполняется..."
    sleep 1
done
