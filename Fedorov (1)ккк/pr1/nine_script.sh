#!/bin/bash
set -e

if [ "$EUID" -ne 0 ]; then
	echo "Для выполнения скрипта требуется права root"
	exit 1
fi

exec 2> error.log

cp important_file.txt backup/ || {
	echo "Ошибка копирования файла"
	exit 1
}
