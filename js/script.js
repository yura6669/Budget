'use strict';

let openStart = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItem1 = document.getElementsByClassName('expenses-item')[0],
    expensesItem2 = document.getElementsByClassName('expenses-item')[1],
    expensesItem3 = document.getElementsByClassName('expenses-item')[2],
    expensesItem4 = document.getElementsByClassName('expenses-item')[3],
    buttonExpenses = document.getElementsByTagName('button')[0],
    buttonOptionalExpenses = document.getElementsByTagName('button')[1],
    buttonCountBudget = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    optionalExpensesItem1 = document.querySelectorAll('.optionalexpenses-item')[0],
    optionalExpensesItem2 = document.querySelectorAll('.optionalexpenses-item')[1],
    optionalExpensesItem3 = document.querySelectorAll('.optionalexpenses-item')[2],
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('.checksavings'),
    chooseSum = document.querySelector('#sum'),
    choosePercent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'); 

let money, time;

buttonExpenses.disabled = true;
buttonOptionalExpenses.disabled = true;
buttonCountBudget.disabled = true;

openStart.addEventListener('click', function() {
    time = prompt("Ведіть дату в форматі YYYY-MM-DD", "YYYY-MM-DD");
    money = +prompt("Ваш бюджет на місяць?", "0");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на місяць?", "0");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed(2);
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth()+1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    buttonExpenses.disabled = false;
    buttonOptionalExpenses.disabled = false;
    buttonCountBudget.disabled = false;
});

buttonExpenses.addEventListener('click', function() {
    let sum = 0;
     // ЦИКЛ FOR
     for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value, 
            b = expensesItem[++i].value;
        
        if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && 
        a != '' && b != '' && a.length < 50) {
            console.log("Успішно");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log("Не успішно");
            i--;
        }
        expensesValue.textContent = sum;
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
});

buttonOptionalExpenses.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let question = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] =question;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ', ';
    }
});

buttonCountBudget.addEventListener('click', function() {
    if(appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent)/30).toFixed(2);
        dayBudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Мінімальний рівень достатку";
        }   else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = "Середній рівень достатку";
            }
            else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = "Високий рівень достатку";
            } else {
                levelValue.textContent = "Помилка";
        }
    } else {
        dayBudgetValue.textContent = 'Помилка';
    }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
});

choosePercent.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
});

var appData = {
    budget:money,
    timeData:time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
