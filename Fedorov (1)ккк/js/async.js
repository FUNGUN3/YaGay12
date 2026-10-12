function delay(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Прошло ${seconds} секунд`);
        }, seconds * 1000);
    });
}

async function runTasks()
    {console.log('🚀 НАЧАЛО РАБОТЫ');
    try {
        console.log('📌 Задача 1');
        const result1 = await delay(2);
        console.log('✅', result1);
        console.log('📌 Задача 2');
        const result2 = await delay(3);
        console.log('✅', result2);
        console.log('📌 Задача 3');
        const result3 = await delay(1);
        console.log('✅', result3);
        console.log('🎉 ВСЕ ЗАДАЧИ ВЫПОЛНЕНЫ!');
        return 'Успешно завершено';
    } catch (error) {
        console.error('❌ Ошибка:', error);
        return 'Завершено с ошибкой';
    }
}

console.log('👋 До вызова функции');
runTasks()
    .then((result) => {
        console.log('📦 Результат:', result);
    });
 console.log('👋 После вызова функции');
