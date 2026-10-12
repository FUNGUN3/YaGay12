class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.createdAt = new Date();
    }

    greet() {
        console.log(`Привет! Я ${this.name}, мне ${this.age} лет`);
    }

    getInfo() {
        return `${this.name} из ${this.city}, возраст: ${this.age}`;}

    haveBirthday() {
        this.age++;
        console.log(`🎂 ${this.name} теперь ${this.age} лет!`);
    }
}

const person1 = new Person('Анна', 25, 'Москва');

 const person2 = new Person('Петр', 30, 'Санкт-Петербург');

person1.greet();
person2.greet();

 console.log(person1.getInfo());
console.log(person2.getInfo());

person1.haveBirthday();
console.log(person1.age);
