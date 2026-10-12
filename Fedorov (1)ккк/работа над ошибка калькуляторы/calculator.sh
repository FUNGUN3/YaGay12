#!/bin/bash
read -p "Введите первое число: " a
read -p "Введите второе число: " b
read -p "Введите операцию (+, -, *, /): " op

if [[ "$op" == "+" ]]; then
    echo "Результат: $a + $b = $((a+b))"
elif  [[ "$op" == "-" ]]; then
    echo "Результат: $a - $b = $((a-b))"
elif  [[ "$op" == "*" ]]; then
    echo "Результат: $a * $b = $((a*b))"
elif  [[ "$op" == "/" ]]; then
    echo "Результат: $a / $b = $((a/b))"
else
    echo "Неизвестная операция"
fi
