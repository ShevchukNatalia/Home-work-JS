// 1. створити змінні присвоїти значення та вивести
let greeting = 'Hello';
let site = 'owu';
let domain = 'com';
let country = 'ua';
let firstNum = 1;
let lastNum = 10;
let nagativeNum = -999;
let positiveNum = 123;
let pi = 3.14;
let fractionalNum = 2.7;
let age = 16;
let forTtue = true;
let forFalse = false;

console.log(greeting);
console.log(site);
console.log(domain);
console.log(country);
console.log(firstNum);
console.log(lastNum);
console.log(nagativeNum);
console.log(positiveNum);
console.log(pi);
console.log(fractionalNum);
console.log(age);
console.log(forTtue);
console.log(forFalse);

// 2.створити та вивести 3 змінні
let firstName = 'Наталя';
let middleName = 'Володимирівна';
let lastName = 'Шевчук';

let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// 3.визначити типи
let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);

// 4. За допомогою prompt отримати 3 слова

let name = prompt('Введіть своє ім*я');

name = name + ' ' + prompt('Введіть своє прізвище');

name  = name + ' ' + prompt('Введіть свій вік');

console.log(name)