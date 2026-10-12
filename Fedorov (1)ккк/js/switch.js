const dayNumber = 3;

switch (dayNumber) {
case 1: // Если dayNumber === 1
console.log('Понедельник');
break; // Выходим из switch
  case 2: // Если dayNumber === 2
console.log('Вторник');
break;
  case 3: // Если dayNumber === 3
console.log('Среда');
break;
  case 4:
console.log('Четверг');
break;
  case 5:
console.log('Пятница');
break;
  case 6:
console.log('Суббота');
break;
  case 7:
console.log('Воскресенье');
break;
  default: // Если ни один case не подошел
console.log('❌ Неверный номер дня');
}
