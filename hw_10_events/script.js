// 1- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".
let button = document.getElementById('elem');
console.log('elem');
button.onclick = function () {
    document.getElementById('text') .style.display = 'none';
}
////////////////////////////////////////////

// 2 - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

document.getElementById('ageButton').addEventListener('click', function (){
    let age = document.getElementById('ageInput').value;

    if (age < 18){
        document.getElementById('message').innerText = 'Вам ще немає 18';
    } else {
        document.getElementById('message').innerText = 'Ви повнолітні';
    }
})
/////////////////////////////

// 3 Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати
// данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку,
// під формою з'явився блок з вашим об'єктом

let form = document.forms.form;
form.addEventListener('submit', function (eventObject){
    eventObject.preventDefault();
    let name = this.name.value;
    let surname = this.surname.value;
    let age = this.age.value;
    console.log({name, surname, age});

    let userObject = {
        name: name,
        surname: surname,
        age: age
    };
    let outputDiv = document.getElementById('output');
    outputDiv.innerText = `Ім'я: ${userObject.name}, Прізвище: ${userObject.surname}, Вік: ${userObject.age}`;
})
/////////////////////////


// 4 є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені
// сторінки буде додавати до неї +1
let counterValue = localStorage.getItem('counter') || 1;
counterValue = parseInt(counterValue) + 1;

localStorage.setItem('counter', counterValue);
document.getElementById('counter').innerText = counterValue;


// 6 створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається
// миттєво, без натискань додаткових кнопок
document.getElementById('kgInput').addEventListener('input', function() {
    let kg = document.getElementById('kgInput').value;

    if (isNaN(kg) || kg.trim() === '') {
        document.getElementById('fnInput').innerText = '0';
    } else {
        let pounds = kg * 2.20462;
        document.getElementById('fnInput').innerText = pounds.toFixed(2);
    }
});
///////////////

// 7 В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з
// та додає в нього об'єкт сигнатура функції - addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName, objToAdd) {
      let myArray = JSON.parse(localStorage.getItem(arrayName)) || [];
    myArray.push(objToAdd);

    localStorage.setItem(arrayName, JSON.stringify(myArray));
}
let newObject = { id: 1, name: "Test" };
addToLocalStorage("myArray", newObject);
////////////////////////

// 8  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let btn = document.getElementById('btnTab');
let container = document.getElementById('container');

btn.addEventListener('click',function (){
    let numLinesInput = document.getElementById('numLinesInput').value;
    let numCellsInput = document.getElementById('numCellsInput').value;
    let contentCell = document.getElementById('contentCell').value;

    container.innerHTML = '';
    let table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.width ='50% ';

    for (let i = 0; i < numLinesInput; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < numCellsInput; j++) {
            let td = document.createElement('td');
            td.textContent = contentCell;
            td.style.border = '1px solid black';
            td.style.padding = '8px';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    container.appendChild(table);
});



