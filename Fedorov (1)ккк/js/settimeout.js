console.log('⏰ НАЧАЛО');

setTimeout(() => {
    console.log('✅ Прошла 1 секунда');
}, 1000);

setTimeout(() => {
    console.log('✅ Прошло 2 секунды');
}, 2000);

setTimeout(() => {
    console.log('✅ Прошло 3 секунды');
}, 3000);
console.log('⏰ КОНЕЦ (но операции еще выполняются)');
