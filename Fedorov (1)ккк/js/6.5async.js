function riskyOperation(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve('✅ Операция успешна!');

            } else {
                reject(new Error('❌ Что-то пошло не так...'));
            }
        }, 1000);
    });
}

async function runRiskyOperation() {
    console.log('🚀 Запуск рискованной операции...');
    try {
        const result = await riskyOperation(true);
        console.log('📦 Результат:', result);
        console.log('🔧 Продолжаем работу...');
        return 'Все хорошо';
    } catch (error) {
        console.error('💥 Поймана ошибка:', error.message);
        console.log('🔧 Выполняем восстановление...');
        return 'Использовано значение по умолчанию';
    } finally {
        console.log('🧹 Очистка ресурсов...');
    }
}

console.log('=== УСПЕШНАЯ ОПЕРАЦИЯ ===');
runRiskyOperation().then((result) => {
    console.log('🏁 Итог:', result);
});
