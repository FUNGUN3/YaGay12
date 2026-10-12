const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'red',
    price: 25000
};

console.log('=== СПОСОБ 1: for...in ===');
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

console.log('\n=== СПОСОБ 2: Object.keys() ===');
const keys = Object.keys(car);
for (let key of keys) {
    console.log(`${key}: ${car[key]}`);
}

console.log('\n=== СПОСОБ 3: Object.values() ===');
const values = Object.values(car);
for (let value of values) {
    console.log(value);
}

console.log('\n=== СПОСОБ 4: Object.entries() ===');
const entries = Object.entries(car);
for (let [key, value] of entries) {
    console.log(`${key} = ${value}`);
}
