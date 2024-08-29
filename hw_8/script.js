
// 1 Створити функцію, яка робить глибоку копію об'єкту.
//Додати перевірки на undefined, null, NaN.
   // Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

let user = {
    name:'Ivan',
    salary: 3000,
    tax() {
        return this.salary * 0.2;
    },
    age:32,
    adult(){
        return this.age > 18;
    }
}
function deepClone(obj){
    if(obj && typeof obj !== 'object') {
        return 'це не об*єкт';
        }
        let cloneObj = JSON.parse( JSON.stringify(obj));
        for (const objKey in obj) {

            if( typeof obj[objKey] === "function"){
               cloneObj[objKey] = obj[objKey].bind(cloneObj);
            }
        }
        return cloneObj;
    }

console.log(deepClone(user));

//2 є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let transformedArray = coursesAndDurationArray.map((course, index) => ({id: index + 1, ...course}));

console.log(transformedArray);