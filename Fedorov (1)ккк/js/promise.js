function wait(seconds) {
    return new Promise((resolve, reject) => {
        console.log(`⏳ Ждем ${seconds} секунд...`);

        setTimeout(() => {
            resolve(`✅ Прошло ${seconds} секунд(ы)`);
        }, seconds * 1000);
    });
}

console.log('🚀 Начинаем');
wait(2)
    .then((result) => {
        console.log(result);
        console.log('📦 Продолжаем выполнение...');
        return wait(3);
    })
    .then((result) => {
        console.log(result);
        console.log('🎉 Все операции завершены!');
    })
    .catch((error) => {
        console.error('❌ Ошибка:', error);
    });
 console.log('👋 Код продолжает выполняться...');
