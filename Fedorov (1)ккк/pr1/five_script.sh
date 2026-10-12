#!/bin/bash
FILE="/etc/passwd"

if [ -f  "$FILE" ]; then
	echo  "Файл $FILE существует"
	if  [ -r "$FILE" ]; then 
		echo "Файл доступен для чтения"
	fi
else
	echo "Файл не существует"
fi


