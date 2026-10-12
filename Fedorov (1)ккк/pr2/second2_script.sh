#!/bin/bash

string1="hello"
string2="world"
if [ "$string1" = "$string2" ]; then
echo "Строки равны"
else
echo "Строки разные"
fi

a=10
b=20
if [ $a -eq $b ]; then echo "a равно b"; fi # equal
if [ $a -ne $b ]; then echo "a не равно b"; fi # not equal
if [ $a -lt $b ]; then echo "a меньше b"; fi # less than
if [ $a -le $b ]; then echo "a меньше или равно b"; fi # less or equal
if [ $a -gt $b ]; then echo "a больше b"; fi # greater than
if [ $a -ge $b ]; then echo "a больше или равно b"; fi # greater or equal

if [ $a -gt 5 ] && [ $a -lt 15 ]; then
echo "a между 5 и 15"
fi
 if [ $a -lt 5 ] || [ $a -gt 15 ]; then
echo "a меньше 5 или больше 15"
fi
