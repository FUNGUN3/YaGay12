#!/bin/bash
echo "=== Мониторинг системы ==="
echo "Дата: $(date)"
echo "Загрузка CPU: $(uptime | awk '{print $10 $11 $12}')"
echo "Свободная память: $(free -h | grep Mem | awk '{print $4}')"
echo "Дисковое пространство:"
df -h / | tail -1
