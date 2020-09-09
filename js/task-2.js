// Напиши функцию countProps(obj),
// считающую кол - во свойств в объекте.
// Функция возвращает число - количество свойств.

const countProps = function (obj) {
  const array = Object.keys(obj);
  // console.log(array);
  const array2 = Object.values(obj);
  // console.log(array2);
  const array3 = Object.entries(obj);
  // console.log(array3);
  return array.length, array2.length, array3.length;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
