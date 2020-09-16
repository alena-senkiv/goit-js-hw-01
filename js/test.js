// напиши скрипт который проверяет вхождение числа
// в отрезок обозначеный х1 и х2

// до х1
// после х2
// от х1 до х2
// до х1 или после х2

// const x1 = 10;
// const x2 = 30;
// const number = 50;

// console.log(`Число ${number} попадает в отрезок до ${x1} ?`, number < x1);

// console.log(`Число ${number} попадает в отрезок после ${x2} ?`, number > x2);

// console.log(
//   `Число ${number} попадает в отрезок от ${x1} до ${x2} ?`,
//   number > x1 && number < x2
// );

// console.log(
//   `Число ${number} попадает в отрезок до ${x1} или после ${x2} ?`,
//   number < x1 || number > x2
// );
//
//
//
//
//
// Напиши скрипт который проверяет возможность открыть чат с пользователем
// Для этого пользователь должен быть
// -другом
// -онлайн
// -без режима не беспокоить

// const isOnLine = true;
// const isFriend = true;
// const isDnd = false;
// const canOpenChat = isOnLine && isFriend && !isDnd;

// console.log("Можно открыть чат?", canOpenChat);
//
//
//
//
//
//
//Напиши скрипт подписки пользователя при доступе к контенту
// -есть три тыпа подписки: free, pro, vip;
// -получить доступ могут только pro и vip;

// const sub = 'pro';

// const canAccessContent = sub === 'pro' || sub === 'vip';
// console.log('Есть доступ к контенту?', canAccessContent);
//
//
//
//
//
//
const getItemsString = function (array) {
  // Write code under this line

  let result = "";
  for (let i = 0; i < array.length; i += 1) {
    result += `${i + 1} - ${array[i]}\n`;
  }
  return result;
};
console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

//console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/
