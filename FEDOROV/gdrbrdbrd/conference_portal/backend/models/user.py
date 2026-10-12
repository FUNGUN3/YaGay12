from werkzeug.security import generate_password_hash, check_password_hash

class User(BaseModel):
    # ... код инициализации ...

    def save(self) -> tuple:
        """Сохранение нового пользователя с хешированием пароля."""
        ok, msg = self.validate()
        if not ok:
            return False, msg
        if self.login_exists():
            return False, "Пользователь с таким логином уже существует"
        if self.email_exists():
            return False, "Пользователь с таким email уже существует"

        # ХЕШИРОВАНИЕ ПАРОЛЯ
        password_hash = generate_password_hash(
            self.password,
            method='pbkdf2:sha256:600000',  # или 'bcrypt'
            salt_length=16
        )

        user_id = self.db.execute(
            """INSERT INTO user (login, password_hash, email, phone, role)
               VALUES (?, ?, ?, ?, ?)""",
            (self.login, password_hash, self.email, self.phone, self.role)
        )
        self.id = user_id
        return True, user_id

    @staticmethod
    def authenticate(login: str, password: str) -> dict:
        """Аутентификация: сравнение введённого пароля с хешем."""
        db = Database()
        user = db.fetch_one("SELECT * FROM user WHERE login = ?", (login,))
        if user and check_password_hash(user['password_hash'], password):
            return user
        return None