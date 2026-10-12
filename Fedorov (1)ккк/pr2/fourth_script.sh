#!/bin/bash

echo "=== break - прерывание цикла ==="
for i in {1..10}
do
    if [ $i -eq 6 ]; then
        echo "Достигнуто 6 - прерывание цикла"
        break
    fi
    echo "Текущее число: $i"
done

echo "=== continue - пропуск итерации ==="
for i in {1..5}
do
    if [ $i -eq 3 ]; then
        echo "Пропускаем 3"
        continue
    fi
    echo "Текущее число: $i"
done
