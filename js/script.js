'use strict';

let money, time;
function start() {
    money = +prompt("Ваш бюджет на місяць?", "0");
    time = prompt("Ведіть дату в форматі YYYY-MM-DD", "YYYY-MM-DD");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на місяць?", "0");
    }
}

start();

var appData = {
    budget:money,
    timeData:time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

    function chooseExpenses() {
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
    }

    chooseExpenses();

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

    function detectDayBudget() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        
        alert ("Щоденний бюджет: " + appData.moneyPerDay);
    }

    detectDayBudget();

   function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Щоденний бюджет - " + appData.moneyPerDay + " - Мінімальний рівень достатку");
    }   else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Щоденний бюджет - " + appData.moneyPerDay + " - Середній рівень достатку");
        }
        else if (appData.moneyPerDay > 2000) {
            console.log("Щоденний бюджет - " + appData.moneyPerDay + " - Високий рівень достатку");
        } else {
            console.log("Помилка");
    }
   }
   
   detectLevel();

    function checkSavings() {
        if(appData.savings == true) {
            let save = +prompt("Яка сума накопичень?", "0"),
                persent = +prompt("Під який відсоток", "0");
            appData.monthIncome = (save/100/12*persent).toFixed(2);
            alert("Дохід в місяць з вашого депозиту - " + appData.monthIncome);
            console.log("Дохід в місяць з вашого депозиту - " + appData.monthIncome);
        }
    }

    checkSavings();

    function chooseOptExpenses() {
        for (let i = 0; i < 3; i++) {
            let question = prompt("Введіть необов'язкові витрати", "....");
            appData.optionalExpenses[i] =question;
            console.log(question);
        }
    }

    chooseOptExpenses();