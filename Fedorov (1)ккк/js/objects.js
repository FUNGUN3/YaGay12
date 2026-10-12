const user = {

name: 'Алексей',
age: 25,
isStudent: false,
hobbies: ['чтение', 'спорт', 'музыка'],

greet: function() {
    console.log(`Привет, меня зовут ${this.name}`);

},

getInfo() {
    return `${this.name}, ${this.age} лет`;
  }
};

console.log('Имя:', user.name);
console.log('Возраст:', user.age);
console.log('Студент?', user.isStudent);


console.log('Хобби:', user['hobbies']);


user.greet();
console.log(user.getInfo());


user.age = 26;
user.city = 'Москва';
console.log('Город:', user.city);
