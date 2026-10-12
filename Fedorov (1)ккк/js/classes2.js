class BankAccount {

#balance;
  constructor(owner, initialBalance) {
this.owner = owner;
this.#balance = initialBalance;
this.transactions = [];
}

getBalance() {

return this.#balance;
}
deposit(amount) {
if (amount <= 0) {
console.log('❌ Сумма должна быть положительной');
return;
}
  this.#balance += amount;
this.transactions.push(`💰 Пополнение: +${amount}`);
console.log(`✅ Счет пополнен на ${amount}`);
}

withdraw(amount) {
if (amount <= 0) {
console.log('❌ Сумма должна быть положительной');
return;
}
  if (amount > this.#balance) {
console.log(`❌ Недостаточно средств. Доступно: ${this.#balance}`);
return;
}
  this.#balance -= amount;
this.transactions.push(`💸 Снятие: -${amount}`);
console.log(`✅ Снято ${amount}`);
}

showHistory() {
console.log(`\n=== История операций ${this.owner} ===`);
if (this.transactions.length === 0) {
console.log('Операций не было');
return;
}
  for (let transaction of this.transactions) {
console.log(transaction);
}
console.log(`Текущий баланс: ${this.#balance}`);
}
}

const account = new BankAccount('Анна', 1000);
 console.log(`Владелец: ${account.owner}`);
console.log(`Баланс: ${account.getBalance()}₽`);

account.deposit(500);
account.deposit(300);

account.withdraw(200);
account.withdraw(2000); // Попытка снять больше, чем есть

account.showHistory();
