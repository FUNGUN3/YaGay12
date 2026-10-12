#!/bin/bash
echo "=== Перебор списка значений ==="
for fruit in "apple" "banana" "orange" "grape"
do
    echo "Фрукт: $fruit"
done

echo "=== Числовой диапазон ==="
for i in {1..5}
do
    echo "Число: $i"
done
for i in {1..10..2}
do
    echo "Нечетное: $i"
done

echo "=== C-подобный синтаксис ==="
for ((i=1; i<=5; i++))
do
    echo "Итерация: $i"
done

echo "=== Перебор файлов ==="
for file in *.txt
do
    if [ -f "$file" ]; then
        echo "Найден текстовый файл: $file"
    fi
done

echo "=== Перебор процессов ==="
for process in $(ps aux | grep "bash" | awk '{print $2}')
do
    echo "PID процесса bash: $process"
done
