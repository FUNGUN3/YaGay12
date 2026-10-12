class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.isAlive = true;
    }

    speak() {
        console.log(`${this.name} издает звук`);
    }

    getInfo() {
        return `${this.name}, возраст: ${this.age} лет`;
    }

    feed() {
        console.log(`🍖 ${this.name} кушает`);
    }
}

class Dog extends Animal {

    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} (${this.breed}) говорит: ГАВ-ГАВ!`);
    }

    fetch() {
        console.log(`🟡 ${this.name} приносит мячик!`);
    }

    getInfo() {
       const parentInfo = super.getInfo();
        return `${parentInfo}, порода: ${this.breed}`;
    }
}

const animal = new Animal('Зверь', 5);
const dog = new Dog('Рекс', 3, 'Овчарка');

 console.log('=== ЖИВОТНОЕ ===');
console.log(animal.getInfo());
animal.speak();
animal.feed();

 console.log('\n=== СОБАКА ===');
console.log(dog.getInfo());
dog.speak();
dog.feed();
dog.fetch();


console.log('\n=== ПРОВЕРКА ТИПОВ ===');
console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
console.log(animal instanceof Dog);
