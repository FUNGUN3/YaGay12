#!/bin/bash
while read line; do
	echo "Строка: $line"
done < /etc/passwd

COUNT=1
while [ $COUNT -le 5 ]; do
	echo "Счетчик: $COUNT"
	((COUNT++))
done
