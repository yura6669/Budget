'use strict';

let money = prompt("Ваш бюджет на місяць?", "0");

let time = prompt("Ведіть дату в форматі YYYY-MM-DD", "YYYY-MM-DD");

var appData = {
    budget:money,
    timeData:time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("Введіть обов'язкові розходи в цьому місяці", "..."), 
    a2 = prompt("В скільки ці розходи обійдуться?", "..."),
    a3 = prompt("Введіть обов'язкові розходи в цьому місяці", "..."),
    a4 = prompt("В скільки ці розходи обійдуться?", "...");

    appData.expenses.a1 = a2;
    appData.expenses.a3 = a4;

    alert (appData.budget / 30);

    console.log("Ваш бюджет на місяць - " + money);
    console.log("Сьогоднішня дата - " + time);
    console.log("Ваш бюджет на місяць - " + appData.budget);
    console.log("Сьогоднішня дата - " + appData.timeData);
    console.log("Обов'язкові розходи - " + appData.expenses);
    console.log("Необов'язкові розходи - " + appData.optionalExpenses);
    console.log("Додатковий дохід - " + appData.income);
    console.log("Saving - " + appData.savings);
    console.log("Створений об'єкт - " + appData);
    console.log("обов'язкові розходи в цьому місяці - " + a1);
    console.log("Сума розходів - " + a2);
    console.log("обов'язкові розходи в цьому місяці - " + a3);
    console.log("Сума розходів - " + a4);
    console.log("Бюджет на один день - " + appData.budget / 30);