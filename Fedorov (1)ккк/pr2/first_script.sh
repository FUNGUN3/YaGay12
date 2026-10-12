#!/bin/bash
name="John"
age=25
price=19.99
 
current_date=$(date)

echo "Введите ваше имя:"
read user_name
  
echo "Привет, $name!" 
echo "Привет, ${name}!" 
 
echo "name" 

echo "Имя: $name, Возраст: $age"
echo "Текущая дата: $current_date"
echo "Введенное имя: $user_name"
