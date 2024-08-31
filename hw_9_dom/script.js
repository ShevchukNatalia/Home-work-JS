// 1 - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let inner = document.createElement('div');
inner.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
inner.classList.add('wrap','collapse','alpha', 'beta');
inner.style.background = 'blue';
inner.style.color = 'yellow';
inner.style.fontSize = '30px';
inner.style.marginTop = '20px';
document.body.appendChild(inner);
let clone = inner.cloneNode(true);
document.body.appendChild(clone);

console.log(inner);
console.log(clone);


// 2 - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let items = ['Main','Products','About us','Contacts']
let menu = document.createElement('ul');
items.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    menu.appendChild(li);

});
console.log(menu);


// 3 - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let courseDiv = document.getElementsByClassName('courses')[0];

let coursesAndDurationArray = [
   {title: 'JavaScript Complex', monthDuration: 5},
   {title: 'Java Complex', monthDuration: 6},
   {title: 'Python Complex', monthDuration: 6},
   {title: 'QA Complex', monthDuration: 4},
   {title: 'FullStack', monthDuration: 7},
   {title: 'Frontend', monthDuration: 4}
 ];
    for (const coursesElement of coursesAndDurationArray) {
  let div = document.createElement('div');
  div. classList.add('course');
  div.innerText = coursesElement.title + ': ' + coursesElement. monthDuration;
  courseDiv.appendChild(div);
        console.log(div);
}

// 4 - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

    let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const durationElement of coursesAndDurationArray1) {
    let divCourse = document.createElement('div');
    divCourse.classList.add('item');

    let h1 = document.createElement('h2');
    h1.innerText = `${durationElement.title}`;
    divCourse.appendChild(h1);
    let p = document.createElement('p');
    p.innerText = `${durationElement.monthDuration}`;
    divCourse.appendChild(p);

  document.body.appendChild(divCourse);
    console.log(divCourse);
}
