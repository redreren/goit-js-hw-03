// Напиши функцию findBestEmployee(employees),
// которая принимает объект сотрудников и возвращает имя самого продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненых задач содержатся как свойства объекта в формате "имя": "кол-во задач".

const findBestEmployee = function (employees) {
  const arr = Object.entries(employees);
  let bestName = arr[0][0];
  let bestScore = arr[0][1];
  // console.log(bestName, bestScore);
  for (let i = 1; i < arr.length; i++) {
    // console.log(arr[i]);
    const innerArr = arr[i];
    // console.log(innerArr);
    let name = innerArr[0];
    // console.log(name);
    let score = innerArr[1];
    // console.log(score);
    if (bestScore < score) {
      bestScore = score;
      bestName = name;
      // console.log(bestScore, bestName);
    }
  }
  return bestName;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
