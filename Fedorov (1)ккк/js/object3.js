const company = {
    name: 'Tech Corp',
    founded: 2010,
    address: {
        city: 'Москва',
        street: 'Тверская',
        building: 15
    },

    employees: [
        {
            name: 'Иван',
            position: 'Разработчик',
            salary: 100000
        },
        {
            name: 'Мария',
            position: 'Дизайнер',
            salary: 80000
    },
    {
            name: 'Петр',
            position: 'Менеджер',
            salary: 90000
        }
    ]
};

console.log('Компания:', company.name);
console.log('Город:', company.address.city);
console.log('Улица:', company.address.street);

console.log('Первый сотрудник:', company.employees[0].name);
console.log('Зарплата Марии:', company.employees[1].salary);

console.log('\n=== СПИСОК СОТРУДНИКОВ ===');
for (let employee of company.employees) {

    console.log(`${employee.name} - ${employee.position} (${employee.salary}₽)`);
}
