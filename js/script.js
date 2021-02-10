'use strict';

let money = +prompt("Ваш бюджет на місяць?", "0");

let time = +prompt("Ведіть дату в форматі YYYY-MM-DD", "YYYY-MM-DD");

var appData = {
    budget:money,
    timeData:time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

    // ЦИКЛ FOR
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введіть обов'язкові витрати в цьому місяці", "..."), 
            b = +prompt("В скільки ці витрати обійдуться?", "...");
        
        if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && 
        a != '' && b != '' && a.length < 50) {
            console.log("Успішно");
            appData.expenses[a] = b;
        } else {
            console.log("Не успішно");
            i--;
        }
    }

    // ЦИКЛ WHILE
    // let i = 0;
    // while(i < 2) {
    //     let a = prompt("Введіть обов'язкові розходи в цьому місяці", "..."), 
    //         b = +prompt("В скільки ці розходи обійдуться?", "...");
    //     i++;

    //     if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && 
    //     a != '' && b != '' && a.length < 50) {
    //         console.log("Успішно");
    //         appData.expenses[a] = b;
    //     } else {
    //         console.log("Не успішно");
    //         i--;
    //     }
    // }
    
    // ЦИКЛ DO .... WHILE
    // let i = 0;
    // do {
    //     let a = prompt("Введіть обов'язкові розходи в цьому місяці", "..."), 
    //         b = +prompt("В скільки ці розходи обійдуться?", "...");
    //     i++;

    //     if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && 
    //     a != '' && b != '' && a.length < 50) {
    //         console.log("Успішно");
    //         appData.expenses[a] = b;
    //     } else {
    //         console.log("Не успішно");
    //         i--;
    //     }
    // }
    // while (i < 2);

    appData.moneyPerDay = (appData.budget / 30);

    alert ("Щоденний бюджет: " + appData.moneyPerDay);

    if (appData.moneyPerDay < 100) {
        console.log("Щоденний бюджет - " + appData.moneyPerDay + " - Мінімальний рівень достатку");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Щоденний бюджет - " + appData.moneyPerDay + " - Середній рівень достатку");
    }
    else if (appData.moneyPerDay > 2000) {
        console.log("Щоденний бюджет - " + appData.moneyPerDay + " - Високий рівень достатку");
    } else {
        console.log("Помилка");
    }
    