let sum = 0;

for (let i = 1; i <= 10; i++) {

sum = sum + i;

console.log(`Шаг ${i}: ${sum - i} + ${i} = ${sum}`);
}

console.log(`Сумма чисел от 1 до 10 = ${sum}`);
