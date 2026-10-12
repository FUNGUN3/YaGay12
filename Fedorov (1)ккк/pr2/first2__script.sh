#!/bin/bash
first_name="John"
last_name="Doe"
full_name="$first_name $last_name"
echo "Полное имя: $full_name"
x=10
y=5
sum=$((x + y))
product=$((x * y))
echo "Сумма: $sum, Произведение: $product"
echo "Домашняя директория: $HOME"
echo "Текущий пользователь: $USER"
var_with_space="value with spaces"
echo "Переменная: ${var_with_space}"
