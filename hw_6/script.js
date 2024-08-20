//1.Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
function strLength (str){
 return str.length;
}
console.log(`кількість символів у фразі "hello world" - ${strLength("hello world")}`)
console.log(`кількість символів у фразі "lorem ipsum" - ${strLength("lorem ipsum")}`)
console.log(`кількість символів у фразі "javascript is cool" - ${strLength("javascript is cool")}`)

//2. Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
let strTop =  'hello world,';
let strTopLor = 'lorem ipsum,';
let strCool = 'javascript is cool,';
console.log(strTop.toUpperCase());
 console.log(strTopLor.toUpperCase());
 console.log(strCool.toUpperCase());

//3.- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strSmall = 'HELLO WORLD,';
let strSmallLorem = 'LOREM IPSUM,';
let strSmallCool = 'JAVASCRIPT IS COOL,';
console.log(strSmall.toLocaleLowerCase());
console.log(strSmallLorem.toLocaleLowerCase());
console.log(strSmallCool.toLocaleLowerCase());

//4.Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let clear = str.trim();
console.log(clear);


//5. Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
function stringToArray(str) {
 return poem.split(' ');
}
let poem = 'Ревуть воли як ясла повні';
let arr = stringToArray(poem);
console.log(arr);


//6. є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrNum  = [10,8,-7,55,987,-1011,0,1050,0];
let stringNun = arrNum.map(arrNum => arrNum.toString());
console.log();

/*7.створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
 або навпаки в залежності від значення аргументу direction.
 let nums = [11,21,3];
    sortNums(nums,'ascending') // [3,11,21]
    sortNums(nums,'descending') // [21,11,3] */

function sortNums(array,direction){
   if (direction === 'ascending') {
    return array.sort((a,b) => a - b);
   }else if (direction === 'descending'){
    return  array.sort((a,b) => b - a);
   }else {
    return array;
   }
}
const nums = [11,21,3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));


//8. - є масив
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
 ];

//відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((course1,course2) =>{
 return course2.monthDuration - course1.monthDuration;
});
console.log(coursesAndDurationArray);

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let resultFilterArray = coursesAndDurationArray.filter(course=> course.monthDuration >5);
console.log(resultFilterArray);
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapResultArray = coursesAndDurationArray.map((course, index) =>{
return{
  id: index + 1,
 title: course.title,
 monthDuration: course.monthDuration
};
});
console.log(mapResultArray);


//9. описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }/

//////////////////////////////////////////

const suits = ['spade', 'diamond','heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king' ];

const cards = [];
 for (const suit of suits) {
   for (const value of values) {
      const card = {cardSuit: suit, value: value};
      if (suit === 'heart' || suit === 'diamond'){
       card.color = 'red';
      }else {
       card.color = 'black';
      }
      cards.push(card);
  }
}
console.log(cards);
// знайти піковий туз

console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
//  - всі шістки
console.log(cards.filter(card => card.value === '6'));
//  - всі червоні карти
console.log(cards.filter(card => card.color === 'red'));
//  - всі буби
console.log(cards.filter(card => card.cardSuit === 'diamond'));
//  - всі трефи від 9 та більше
console.log(cards.filter(card => card.cardSuit === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));

//10.Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const reduce = cards.reduce((accumulator, card) => {
    switch (card.cardSuit){
        case 'spade':
            accumulator.spades.push(card);
            break;
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
        case 'club':
            accumulator.clubs.push(card);
            break;
    }
    return accumulator;

},{
        spades:[],
        diamonds:[],
        hearts:[],
        clubs:[]
})
console.log(reduce);

//11.взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker



let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(course =>{
    return course.modules.includes('sass');
}));
console.log(coursesArray.filter(course =>{
    return course.modules.includes('docker');
}));

















//111111111111111111111111111111
// const suits =['spade', 'diamond','heart', 'clubs'];
// const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king' ];
//
// const cards = [];
//  for (const suit of suits) {
//    for (const value of values) {
//     const card = {cardSuit:suit, value:value};
//     if (suit === 'heart'|| suit === 'diamond'){
//      card.color = 'red';
//     }else {
//      card.color = 'black';
//     }
//     cards.push(card);
//   }
// }
// console.log(cards);

///2222222222222222222222222222222222222

// const suits = ['spade', 'diamond','heart', 'clubs'];
// const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king' ];
//
//   const cards = [];
//  for (const suit of suits) {
//    for (const value of values) {
//      const card = {cardsSuit:suit, value:value}
//     if (suit === 'heart' || suit === 'diamond'){
//      card.color = 'red';
//     }else {
//      card.color = 'black';
//     }
//     cards.push(card);
//   }
// }
// console.log(cards);

//////444444444444444444444444444444444444444444444

// const suits = ['spade', 'diamond','heart', 'clubs'];
// const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king' ];
//
// const cards = []
//  for (const suit of suits) {
//    for (const value of values) {
//     const card = {cardSuite:suit,value:value};
//     if (suit === 'heart' || suit === 'diamond'){
//      card.color = 'red';
//     }else {
//      card.color = 'black';
//     }
//    cards.push(card);
//   }
// }
// console.log(cards);











