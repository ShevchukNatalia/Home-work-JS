//// 1. Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль ///
console.log('Завдання_1');
let flowers = ['rose',' peony', 'gladiolus', 'narcissus', 'tulip', 'poppy', 'iris', 'violet', 235, 654 ];

console.log(flowers[0]);
console.log(flowers[2]);
console.log(flowers[3]);
console.log(flowers[4]);
console.log(flowers[5]);
console.log(flowers[6]);
console.log(flowers[7]);
console.log(flowers[8]);
console.log(flowers[9]);

// 2.Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.//
console.log('Завдання_2');
let book1 = {
    title: 'Застеляйте ліжко',
    pageCount: 128,
    genre: 'психологія'
};

let book2 = {
    title: 'Кафе на краю світу',
    pageCount: 128,
    genre: 'сучасна проза'
};
let book3 = {
    title: 'Крадійка книжок',
    pageCount: 416,
    genre: 'роман'
};

console.log(book1);
console.log(book2);
console.log(book3);

// 3.- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.//
console.log('Завдання_3----------');
let book4_a = {
    title: 'Застеляйте ліжко',
    pageCount: 128,
    genre: 'психологія',
    author:[
        { name:'Вільям Макрейвен',
            age: 56 }
    ]
};
let book3_a = {
    title: 'Дім на краю світу',
    pageCount: 128,
    genre: 'сучасна проза',
    author:[
        { name:'Джон П. Стрелекі',
           age: 55 }
    ]
};

let book5_a = {
    title: 'Крадійка книжок',
    pageCount: 416,
    genre: 'роман',
    author:[
        { name:'Маркус Зузак',
            age: 49 }
    ]
};
console.log(book4_a);
console.log(book3_a);
console.log(book5_a);


//4. Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
console.log('Завдання_4-----------');
let users =[
    { name: 'Ліна Костенко', username:'lina_k', password:'kos_lina'},
    { name: 'Тарас Шевченко', username: 'taras_shev',password: 'she_tar'},
    {name: 'Іван Франко', username:'ivan_f', password: 'franko' },
    {name: 'Дмитро Павличко', username:'dima_pav', password: 'pavlychko' },
    {name: 'Лариса Денисенко', username:'lara', password: 'denys_lara' },
    {name: 'Сергій Жадан', username:'s_zhadan', password: 'zha_ser' },
    {name: 'Катерина Бабкіна', username:'katya_bab', password: 'kateryna' },
    {name: 'Юрій Андрухович', username:'yriy_and', password: 'andruhovych' },
    {name: 'Лада Лузіна', username:'lada', password: 'luz_lad' },
    {name: 'Ірен Роздобутько', username:'irene', password: 'irene_roz' },
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// 5 описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.//
console.log('Завдання_5-----------');
let temperatures = [
    { morning: 18, afternoon: 25, evening: 20 },
    { morning: 17, afternoon: 24, evening: 19 },
    { morning: 19, afternoon: 26, evening: 21 },
    { morning: 18, afternoon: 27, evening: 22 },
    { morning: 20, afternoon: 28, evening: 23 },
    { morning: 21, afternoon: 29, evening: 24 },
    { morning: 19, afternoon: 27, evening: 22 }
];
console.log(temperatures);

// Є змінна х, якій ви надаєте довільне числове значення.//
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3//
console.log('Завдання_6-----------');

let x = 5;
if (x !== 0) {
    console.log('Вірно')
}else {
    console.log('Не вірно');
}
let a;
a = 1;
if (a !== 0) {
    console.log('Вірно')
}else {
    console.log('Не вірно');
}
a = 0;
if (a !== 0) {
    console.log('Вірно')
}else {
    console.log('Не вірно');
}
a = -3;
if (a !== 0) {
    console.log('Вірно')
}else {
    console.log('Не вірно');
}

//  Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
console.log('Завдання_7-----------');

let time = 30;
if ( time >=0 && time < 15){
    console.log('перша чверть');
}else if( time >=15 && time < 30){
    console.log('друга чверть');
}else if (time >=30 && time < 45){
    console.log('третя чверть');
}else if(time >=45 && time < 60){
    console.log('четверта чверть');
} else {
    console.log(' не існує')
}


 // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця
// потрапляє це число (у першу, другу чи третю).
console.log('Завдання_8------------');

let day = 10;
if (day >=1 && day <=10){
    console.log('число потрапляє у першу декаду');
}else if (day >=11 && day <=20){
    console.log('число потрапляє у другу декаду');
} else if ( day>=21 && day <= 31){
    console.log('число потрапляє у третю декаду');
} else {
    console.log('такої дати неіснує');
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
console.log('Завдання_9----------');

let dayOfWeak= +prompt('Введіть порядковий номер дня тижня ( від 1 до 7)');
switch (dayOfWeak) {
    case 1:
        alert('Monday: зустріч з клієнтами');
        break;
    case 2:
        alert('Tuesday виїз на об`єкт');
        break;
    case 3:
        alert('Wednesday робота в офісі');
        break;
    case 4:
        alert('Thursday: податкова звітність');
        break;
    case 5:
        alert('Friday: підготовка планів на наступний тиждень ');
        break;
    case 6:
        alert('Saturday: вихідний день відвідування батьків');
        break;
    case 7:
        alert('Sunday: вихідний день сім`ї');
        break;
    default:
        alert('Невірний номер');
}


    // - Користувач вводить або має два числа.
    // Потрібно знайти та вивести максимальне число з тих двох .
    // Також потрібно врахувати коли введені рівні числа.
console.log('Завдання_10----------');

let c = +prompt('Введіть перше число');
let b = +prompt('Введіть друге число');
if ( c>b ){
    console.log(` перше число ${c} більше `);
}else if ( c < b){
    console.log(`Друге число ${b} більше `);
} else{
    console.log(`числа рівні`);
}

//  є змінна y, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній y значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//  (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
console.log('Завдання_11--------');

let y = false;
y = typeof y === 'undefined' || y === null || y === 0 || y === false ? 'default': y;
console.log(`Значення змінної: ${y}`);


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
console.log('Завдання_12--------------');
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration >5) {
    console.log('super');
}
if (coursesAndDurationArray[1].monthDuration >5) {
    console.log('super');
}
if (coursesAndDurationArray[2].monthDuration >5) {
    console.log('super');
}
if (coursesAndDurationArray[3].monthDuration >5) {
    console.log('super');
}
if (coursesAndDurationArray[4].monthDuration >5) {
    console.log('super');
}
if (coursesAndDurationArray[5].monthDuration >5) {
    console.log('super');
}
