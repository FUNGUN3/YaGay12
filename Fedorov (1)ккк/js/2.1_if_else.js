 const hour = 14; // 14:00 (2 часа дня)

if (hour >= 6 && hour < 12) {

console.log('🌅 Утро');
} else if (hour >= 12 && hour < 18) {
console.log('☀️ День');
} else if (hour >= 18 && hour < 22) {
console.log('🌆 Вечер');
} else if (hour >= 22 || hour < 6) {

console.log('🌙 Ночь');
} else {

console.log('⚠️ Неверное время');
}
