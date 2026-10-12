import re

class Validator:
    """Класс для валидации пользовательских данных."""

    @staticmethod
    def validate_login(login: str) -> tuple:
        """Логин: латиница + цифры, минимум 6 символов."""
        if not login or len(login) < 6:
            return False, "Логин должен содержать минимум 6 символов"
        if not re.match(r'^[A-Za-z0-9]+$', login):
            return False, "Логин может содержать только латиницу и цифры"
        return True, ""

    @staticmethod
    def validate_password(password: str) -> tuple:
        """Пароль: минимум 8 символов."""
        if not password or len(password) < 8:
            return False, "Пароль должен содержать минимум 8 символов"
        return True, ""

    @staticmethod
    def validate_email(email: str) -> tuple:
        """Формат email."""
        pattern = r'^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
        if not email or not re.match(pattern, email):
            return False, "Некорректный email"
        return True, ""

    @staticmethod
    def validate_phone(phone: str) -> tuple:
        """Телефон в формате 8(XXX)XXX-XX-XX."""
        pattern = r'^8\(\d{3}\)\d{3}-\d{2}-\d{2}$'
        if not phone or not re.match(pattern, phone):
            return False, "Телефон в формате 8(XXX)XXX-XX-XX"
        return True, ""

    @staticmethod
    def validate_fio(fio: str) -> tuple:
        """ФИО: кириллица и пробелы."""
        pattern = r'^[А-Яа-яЁё\s]+$'
        if not fio or not re.match(pattern, fio):
            return False, "ФИО должно содержать только кириллицу и пробелы"
        return True, ""