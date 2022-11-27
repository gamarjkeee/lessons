"use strict";

//----------------------------------------------------------

console.log("Я вчу JS");

//----------------------------------------------------------

let userName = "Ruslan"; // строка
console.log(`Ваше ім'я - ${userName}`);

//----------------------------------------------------------

let userAge = 31; // число
console.log(`Ваше вік - ${userAge}р.`);

//----------------------------------------------------------

let userSisters = ["Natalia", "Victoria"]; // масив
console.log(`Ваші сестри - ${userSisters}`);

//----------------------------------------------------------

let userChild = {
  name: "Володимир", // об'єкт
  age: 3,
};
console.log(`Ваш син - ${userChild.name}, йому ${userChild.age} роки`);

//----------------------------------------------------------

const Pi = 3.14159265359; // константа
console.log(`Число Пі = ${Pi}`);

//----------------------------------------------------------

let temperature = 25; // змінна
console.log(`Температура = ${temperature}°`);
temperature = 20;
console.log(`Температура = ${temperature}°`);

//----------------------------------------------------------

let voltage = 12;
let amperage = 5;
let howLong = 0.5;
let powerFormMeter = 10;
const howManyPower = powerFormMeter * howLong;
const howManyBattery = voltage * amperage;
const howManyTime = howManyBattery / howManyPower;
console.log(
  `Розрахунок часу роботи світлодіодної стрічки в залежності від її довжини і об'єму джерела струму до якого підключена стрічка:`
);
console.log(`- Ємність Вашого джереда струму = ${howManyBattery} ват`);
console.log(
  `- Потужність світлодіодної стрічки довжиною ${howLong} м. = ${howManyPower} ват`
);
console.log(
  `- Час роботи даної стрічки від вказаного джерела = ${howManyTime} годин`
);

//----------------------------------------------------------

let userEyesColor = "blue"; //Змінна для збереження кольору очей юзера

//----------------------------------------------------------

let user;
let uresName = "Вася";
user = uresName;
console.log(user);

//----------------------------------------------------------

let userLastName;
console.log(`Тип даних = ${typeof userLastName}, значення = ${userLastName}`);

//----------------------------------------------------------

let userNull = null;
console.log(`Тип даних = ${typeof userNull}, значення = ${userNull}`);

//----------------------------------------------------------

let doYouHaveAChild = true;
console.log(
  `Тип даних = ${typeof doYouHaveAChild}, значення = ${doYouHaveAChild}`
);
if (doYouHaveAChild) {
  console.log(`Ви маєте дитину! Терпіння Вам і наснаги`);
} else {
  console.log(`Ви поки що не маєте дітей. Насолоджуйтеся свободою`);
}

//----------------------------------------------------------

let randomNumber = 10;
console.log(`Тип даних = ${typeof randomNumber}, значення = ${randomNumber}`);

//----------------------------------------------------------

let randomWord = "путін хуйло";
console.log(`Тип даних = ${typeof randomWord}, значення = ${randomWord}`);

//----------------------------------------------------------

let aboutMe = {
  firstname: `Ruslan`,
  lastname: `Musienko`,
  age: 31,
  married: true,
};
console.log(
  `Тип даних = ${typeof aboutMe}, значення = Ім'я: ${
    aboutMe.firstname
  }, Прізвище: ${aboutMe.lastname}, Вік: ${aboutMe.age} рік, Сімейний стан: ${
    aboutMe.married
  } що значить ОДРУЖЕНИЙ!`
);

//----------------------------------------------------------

let a = 10;
let b = 20;
function functionSumm() {
  let c = a + b;
  console.log(c);
}
functionSumm();

//----------------------------------------------------------
