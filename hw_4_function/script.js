//1.  створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaRectangle(a,b){
    return area = a * b ;
}
let result = areaRectangle(15,35);
console.log(`Площа прямокутника ${result}`);

//2.створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r){
    return  Math.PI * Math.pow(r,2);
}
let radius = 25;
console.log(`Площа кола з радіусом ${radius} дорівнює ${areaCircle(radius)}`);

//3.- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function heightCylinder(height, radiys){
    return 2 * Math.PI * radius * (radiys + height);
}
let height = 20;
let radiys = 10;
console.log(`якщо висота циліндру ${height} та радіус ${radiys} то площациліндра дорівнює ${heightCylinder(height, radiys)}`);

//4.створити функцію яка приймає масив та виводить кожен його елемент
function printArray(exitArr){
        for (const arrElement of exitArr) {
            console.log(arrElement);
        }
}
let  arrFruits = ['apple', 'cherry', 'pear', 'orange' ];
printArray(arrFruits);


//5.створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function textDoc(text, tag){
    document.write(`<${tag}>${text}</${tag}>`);
}
textDoc('Якийсь простий текст  у параграфі', 'p');

//6.створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function listDoc(list){
    document.write(`<ul>
                          <li>${list}</li>
                          <li>${list}</li>
                          <li>${list}</li>
                    </ul>`);
}
listDoc('якийсь текст');
//7. створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function typelistDoc( text,counter){
    document.write('<ul>');
    for (let i = 0; i < counter ; i++) {
    document.write(`  <li>${text}</li> ` );
     }
     document.write('</ul>');
}
typelistDoc('інший текст', 4);

//8.створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
 function primitiv(arrPrimitiv){
     document.write(`<ul>`);
       for (const element of arrPrimitiv) {
         document.write(`<li>${element}</li>`);
     }
     document.write(`<ul>`);
 }
primitiv([456,876,'halepa', true]);

//9.створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function objArray(persons){
        for (const user of persons) {
            document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
objArray([
    {id:1,name:'Olya',age:34},
    {id:2,name:'Petya',age:25},
    {id:3,name:'Roma',age:15},
    {id:4,name:'Vova',age:54},
]);

//10.створити функцію яка повертає найменьше число з масиву

function minArr(numArr) {
    let min = numArr[0];

    for (let i = 1; i < numArr.length; i++) {
        if (numArr[i] < min) {
            min = numArr[i];
        }
    }
    return min;
}
let min = minArr([5, 7, 78, 45, 8, 7,3]);
console.log(min);

//11.створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sumArray(numArray){
    let suma = 0;
      for (const item of numArray) {
        suma = suma + item;
    }
      return suma;
}
console.log(sumArray([1,2,10]));

//12.створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(numArr,index1,index2){
      let swapItem = numArr[index1];
          numArr[index1] = numArr[index2];
          numArr[index2] = swapItem;
          return numArr;
}
console.log(swap([22,11,57,35,14],0,1));

//13.Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

 function exchange(sumUAH, currencyArray,exchangeCurrency ){
     let result = 0;
         for (const item of currencyArray) {
             if(item['currency'] === exchangeCurrency){
                 result = sumUAH / item ['value'];
             }
     }
     return result;
 }
 let currencyValues = [
     {
         currency: 'USD',
         value: 25,
     },
     {
         currency: 'EUR',
         value: 42,
     },
     {
         currency: 'ZLT',
         value: 8,
     },
 ];
console.log(exchange(5000, currencyValues, 'ZLT'));

