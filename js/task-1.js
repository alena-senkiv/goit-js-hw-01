// Объяви две переменные хранящие название и цену товара: name и price
// Присвой переменным следующие характеристики товара(сразу при объявлении)
// название: Генератор защитного поля
// цена: 1000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
// Присвой товару новую цену - 2000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.

// 1. объявить вары и их значения
// 2. вывести лог
// 3. переопределить цену
// 4. вывести лог

const name = '"Генератор защитного поля"';
let price = 1000;

console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

price = 2000;
console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);
