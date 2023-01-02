"use strict";

//----------------------------------------------------------
//----------------------------------------------------------
// ОСНОВНІ МЕТОДИ РЯДКІВ
//----------------------------------------------------------
let someString = `I am Ruslan`;

console.log(someString);
console.log(someString.length); // Довжина рядка length
console.log(someString[0]);

//----------------------------------------------------------
// Регістр toUpperCase(), toLowerCase()

let someStringUpper = someString.toUpperCase(); // Всі символи у верхній регістр
console.log(someStringUpper);

let someStringLower = someString.toLowerCase(); // Всі символи у нижній регістр
console.log(someStringLower);

//----------------------------------------------------------
// Пошук - методы includes, startsWith, endsWith

console.log(someStringLower.includes(`am`)); // пошук в усьому рядку
console.log(someStringLower.startsWith(`i`)); // Починається з
console.log(someStringLower.endsWith(`i`)); // Закінчується на

//----------------------------------------------------------
// Отримання частини рядка, метод slice(start, end)

let someNewString = someString.slice(0, 4);
console.log(someNewString);

//----------------------------------------------------------
// Пошук та заміна replace

someString = someString.replace("I am", "You are");
console.log(someString);

//----------------------------------------------------------
//----------------------------------------------------------
// ОСНОВНІ МЕТОДИ ЧИСЕЛ
//----------------------------------------------------------
// Math.floor - Округлення в меншу сторону

let number = 25.5;
console.log(number);
let numberToLower = Math.floor(number); // Округлення в меншу сторону
console.log(numberToLower);

// Math.ceil - Округлення в більшу сторону
let numberToUpper = Math.ceil(number); // Округлення в більшу сторону
console.log(numberToUpper);

// Math.round - Округлення до ближнього цілого
let numberToCloser = Math.round(number); // Округлення до ближнього цілого числа
console.log(numberToCloser);

// Math.abs - Модуль числа
let numberModul = Math.abs(number); // Модуль числа
console.log(numberModul);

//----------------------------------------------------------

// Math.random()
let numberRandom = Math.random();

//----------------------------------------------------------

// Math.max(a, b, c...) / Math.min(a, b, c...)
console.log(Math.max(1, 2, -3));
console.log(Math.min(1, 2, -3));

let MaxNumber = Math.max(12, 2, -3);
console.log(MaxNumber);

//----------------------------------------------------------
// parseInt и parseFloat
let someVar = `150px`;
let someNum = parseFloat(someVar);
console.log(someNum);

//----------------------------------------------------------
//----------------------------------------------------------
// ОСНОВНІ ОПЕРАТОРИ
//----------------------------------------------------------
// Майже всі оператори автоматично змінюють тип даних на number

let a = `12`;
let b = `5`;
console.log(`a = ${a}; b =${b};`);
// Оператор мінус
let varMinus = a - b;
console.log(`різниця a - b = ${varMinus}`);

// Оператор ділення
let varDivide = a / b;
console.log(`ділення a / b = ${varDivide}`);

// Оператор множення
let varMultiply = a * b;
console.log(`множення a * b = ${varMultiply}`);

// Зведення до степеню
let varStep = a ** b;
console.log(`зведення до степеню a ** b = ${varStep}`);

// Оператор додавання (!!! Тільки цей оператор не змінює тип даних)
let varSumm = a + b;
console.log(`До переведення типу даних: сума a + b = ${varSumm}`);
a = Number(a);
b = Number(b);
varSumm = a + b;
console.log(`Після переведення типу даних на число: сума a + b = ${varSumm}`);

// Взяття залишку від ділення
let varRemainder = a % b;
console.log(`Залишок від ділення a / b = ${varRemainder}`);

// Унарний оператор додавання використовується тільки з одним операндом (учасником обчислення)
let someNum2 = `28`;
let resultSomeNum2 = +someNum2;
console.log(resultSomeNum2);

// Інкремент / декремент (Працює лише зі змінними)
let someNumOne = 5;
let someNumTwo = 8;
console.log(`someNumOne = ${someNumOne}`);
console.log(`++someNumOne = ${++someNumOne}`);
console.log(`someNumTwo = ${someNumTwo}`);
console.log(`--someNumTwo = ${--someNumTwo}`);

// Приорітетність операторів
let q = 2 + (5 * 10) / 5;
console.log(q);

let d = 5;
q = 2 + (5 * 10) / ++d;
console.log(q);

// Оператори порівняння < > == !=  / Раджу === !==
let results = 6 == "6";
let results2 = 6 === `6`;
console.log(`Порівняння 6 == "6" ${results}`);
console.log(`Порівняння 6 === "6" ${results2}`);

// Оператор присвоєння =
const Pi = 3.14;

// Логічні оператори ! || &&
// || - або, && -і, !-ні
let randomNum = 5;
let randomNum2 = 3;
let comparison = randomNum > randomNum2;
console.log(comparison);
console.log(!comparison); // Оператор "ні" !

// Логічні оператори && - і
let result = 0 && 5;
console.log(Boolean(result));
console.log(result);

// Логічні оператори || - або
let result2 = 0 || 5;
console.log(Boolean(result2));
console.log(result2);

// Логічні оператори ! ні
let result3 = true;
console.log(Boolean(result3));
console.log(!result3);

//----------------------------------------------------------
// УМОВНІ ВІДТВЛЕННЯ
//----------------------------------------------------------

// if - else
let i = 3;
if (i > 5) {
  console.log(`i - більше п'яти`);
} else if (i <= 5 && i >= 0) {
  console.log(`i - лежить в межах від 0 до 5`);
} else {
  console.log(`i - від'ємне число`);
}

// Цикл For
let someStringFor = `Привіт! Як справи?`;
console.log(someStringFor[0]);
console.log(someStringFor[1]);
console.log(someStringFor[2]);
console.log(someStringFor[3]);
console.log(someStringFor[4]);
console.log(someStringFor[5]);

for (let e = 0; e < someStringFor.length; ++e) {
  console.log(someStringFor[e]);
}

//----------------------------------------------------------
