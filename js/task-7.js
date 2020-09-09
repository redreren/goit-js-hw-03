// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы
// для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let id = this.transactions.length + 1;
    const transaction = { amount: amount, type: type, id: id };
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    return (this.balance += amount);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    if (this.balance >= amount) {
      return (this.balance -= amount);
    }
    return "не достаточно средств";
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let obj of this.transactions) {
      for (let key in obj) {
        if (obj[key] === id) {
          return obj;
        }
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    for (let obj of this.transactions) {
      for (let key in obj) {
        if (obj[key] === type) {
          return obj;
        }
      }
    }
  },
};
console.log(account.createTransaction(500, Transaction.DEPOSIT, 0));
console.log(account.deposit(400));
console.log(account.balance);
console.log(account.deposit(500));
console.log(account.balance);
console.log(account.withdraw(300));
console.log(account.balance);
console.log(account.withdraw(1000));
console.log(account.balance);
console.log(account.getBalance());
console.log(account.transactions);
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionDetails(4));
console.log(account.getTransactionDetails(5));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
