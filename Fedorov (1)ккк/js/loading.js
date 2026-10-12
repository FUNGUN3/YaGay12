function fetchData(url, delayMs) {
    return new Promise((resolve, reject) => {
        console.log(`🌐 Запрос к ${url}...`);
        setTimeout(() => {
            if (url.includes('user')) {
                resolve({
                    id: 1,
                    name: 'Анна',
                    email: 'anna@example.com',
                    age: 25
                });
            } else if (url.includes('posts')) {
                resolve([
                    { id: 1, title: 'Мой первый пост', likes: 10 },
                    { id: 2, title: 'Второй пост', likes: 5 },
                    { id: 3, title: 'Третий пост', likes: 8 }
            ]);
            } else {
                reject(new Error('Неизвестный URL'));
            }
        }, delayMs);
    });
}

async function loadUserData() {
    console.log('📱 ЗАГРУЗКА ДАННЫХ ПОЛЬЗОВАТЕЛЯ');
    console.log('=' .repeat(40));
    try {
        console.log('👤 Шаг 1: Загрузка профиля...');
        const user = await fetchData('/api/user', 2000);
        console.log('✅ Пользователь загружен:', user.name);
        console.log(` Email: ${user.email}`);
        console.log(` Возраст: ${user.age}`);
        console.log('\n📝 Шаг 2: Загрузка постов...');
        const posts = await fetchData('/api/posts', 1500);
        console.log(`✅ Загружено ${posts.length} постов:`);
        for (let post of posts) {
        console.log(` 📌 ${post.title} (❤️ ${post.likes} лайков)`);
        }

        console.log('\n📊 Шаг 3: Статистика');
        const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);console.log(` Всего лайков: ${totalLikes}`);
        console.log(` Средний возраст: ${user.age} лет`);
        console.log('\n🎉 ДАННЫЕ УСПЕШНО ЗАГРУЖЕНЫ!');
        return {
            user,
            posts,
            totalLikes
        };
    } catch (error) {
        console.error('\n❌ ОШИБКА ЗАГРУЗКИ:', error.message);
        return null;
    }
}
 // Запуск
console.log('🔄 Запуск приложения...');
 loadUserData()
    .then((data) => {
        if (data) {
            console.log('\n📦 Итоговая статистика:');
            console.log(` Пользователь: ${data.user.name}`);
            console.log(` Постов: ${data.posts.length}`);
            console.log(` Лайков: ${data.totalLikes}`);
        }
    });
 console.log('⏳ Ожидание загрузки данных...');
