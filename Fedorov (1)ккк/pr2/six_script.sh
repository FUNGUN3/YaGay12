#!/bin/bash
greet_user() {
    local name=$1
    echo "Количество аргументов: $#"
    echo "Все аргументы: $@"
    echo "Привет, $name!"
    return 0
}

check_file() {
    local filename=$1
    echo "Проверяем файл: $filename"

    if [ -f "$filename" ]; then
        echo "Файл существует и доступен"
        return 0
    else
        echo "Файл не существует или недоступен"
        return 1
    fi
}

echo "=== ДЕМОНСТРАЦИЯ ФУНКЦИЙ ==="

echo "1. Вызов greet_user:"
greet_user "Анна" "Иванова"
echo -e "\n2. Проверка файлов:"
if check_file "/etc/hosts"; then
    echo "✓ Файл /etc/hosts доступен"
else
    echo "✗ Файл /etc/hosts недоступен"
fi

if check_file "/nonexistent/file"; then
    echo "✓ Файл существует"
else
    echo "✗ Файл не существует"
fi
