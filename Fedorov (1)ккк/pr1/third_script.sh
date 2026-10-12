#!/bin/bash
echo "Введите ваше имя:"
read USERNAME
echo "Привет, $USERNAME!"

read -p "Введите ваш возраст: " AGE
echo "Вам $AGE лет"

read -s -p "Введите пароль: " PASSWORD
echo
echo "Пароль принят"
