document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const payload = {
        login:    document.getElementById('login').value.trim(),
        password: document.getElementById('password').value,
        email:    document.getElementById('email').value.trim(),
        phone:    document.getElementById('phone').value.trim()
    };

    const msg = document.getElementById('message');
    msg.textContent = '';
    msg.className = '';

    // Клиентская валидация
    if (!/^[A-Za-z0-9]{6,}$/.test(payload.login)) {
        return showError('Логин: минимум 6 символов (латиница и цифры)');
    }
    if (payload.password.length < 8) {
        return showError('Пароль должен быть не короче 8 символов');
    }
    if (!/^8\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(payload.phone)) {
        return showError('Телефон в формате 8(XXX)XXX-XX-XX');
    }
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(payload.email)) {
        return showError('Некорректный email');
    }

    try {
        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const data = await res.json();

        if (data.success) {
            msg.className = 'success';
            msg.textContent = 'Пользователь успешно создан!';
            setTimeout(() => window.location.href = '/api/auth/login', 1000);
        } else {
            showError(data.message);
        }
    } catch (err) {
        showError('Ошибка сервера: ' + err.message);
    }
});

function showError(text) {
    const msg = document.getElementById('message');
    msg.className = 'error';
    msg.textContent = text;
}