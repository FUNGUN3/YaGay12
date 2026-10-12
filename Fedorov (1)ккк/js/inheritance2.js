class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.isAlive = true;
    }
    breathe() {
        console.log(`${this.name} дышит`);
    }
    eat() {
        console.log(`${this.name} ест`);
    }
}

class Bird extends Animal {
    constructor(name, age, wingspan) {
        super(name, age);
        this.wingspan = wingspan;
        this.canFly = true;
    }

    fly() {
        if (this.canFly) {
            console.log(`🕊️ ${this.name} летит! Размах крыльев: ${this.wingspan}м`);
        } else {
            console.log(`${this.name} не может летать`);
        }
    }

    eat() {
        console.log(`🐛 ${this.name} клюет зернышки`);
    }
}

class Parrot extends Bird {
    constructor(name, age, wingspan, color) {
        super(name, age, wingspan);
        this.color = color;
        this.vocabulary = [];
    }

    speak(word) {
        this.vocabulary.push(word);
        console.log(`🗣️ ${this.name} говорит: "${word}"`);
    }

    listVocabulary() {
        console.log(`📚 ${this.name} знает слова: ${this.vocabulary.join(', ')}`);}

    eat() {
        console.log(`🍌 ${this.name} (${this.color}) ест фрукты`);
    }
}

const animal = new Animal('Зверь', 10);
const bird = new Bird('Орел', 5, 2.5);
const parrot = new Parrot('Кеша', 3, 0.5, 'зеленый');

 console.log('=== ЖИВОТНОЕ ===');
animal.breathe();
animal.eat();

 console.log('\n=== ПТИЦА ===');
bird.breathe();
bird.eat();
bird.fly();

 console.log('\n=== ПОПУГАЙ ===');
parrot.breathe();
parrot.eat();
parrot.fly();
parrot.speak('Привет!');
parrot.speak('Как дела?');
parrot.listVocabulary();
