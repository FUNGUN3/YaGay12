#!/bin/bash
number=10
if [ $number -gt 5 ]; then
echo "Число больше 5"
fi

score=85
if [ $score -ge 90 ]; then
echo "Оценка: A"
elif [ $score -ge 80 ]; then
echo "Оценка: B"
elif [ $score -ge 70 ]; then
echo "Оценка: C"
else
echo "Оценка: F"
fi

filename="script.sh"
if [ -f "$filename" ]; then
echo "Файл $filename существует"
else
echo "Файл $filename не существует"
fi

