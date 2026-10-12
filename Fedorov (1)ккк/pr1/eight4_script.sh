#!/bin/bash
echo "Начало обновления системы: $(date)"

sudo apt update && sudo apt upgrade -y

echo "Обновление завершено: $(date)"
