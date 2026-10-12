#!/bin/bash
BACKUP_DIR="/home/backup"
SOURCE_DIR="/home/user/documents"
DATE=$(date +%Y-%m-%d)

if [ ! -d "BACKUP_DIR" ]; then
	mkdir -p "$BACKUP_DIR"
fi

tar -czf "$BACKUP_DIR/backup_$DATE.tar.gz" "$SOURCE_DIR"
echo "Бэкап создан: $BACKUP_DIR/backup_$DATE.tar.gz"
