//1 Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1,'Kolya', 'Dino','sfSsd@dmail','+380568695432'),
    new User(2,'Olya','Tirsa','kgyf@gmail','+380675948376'),
    new User(3,'Ivan','Saho','jhj@gmail','+380677069584'),
    new User(4,'Vasa','Uiha','fhd@gmail','+380976859476'),
    new User(6,'Nasty','Rika','rud@gmail','+380987656787'),
    new User(7,'Tanya','Marco','msr@gmail','+380934566787'),
    new User(8,'Nasty','Rika','rud@gmail','+38098567897'),
    new User(9,'Vica','Htfsa','trs@gmail','+38067543577'),
    new User(10,'Nasty','Rika','rud@gmail','+38098236547'),
    new User(11,'Stepan','Tyred','tyr@gmail','+380675890876'),

]
console.log(users);

// 2 - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let resultUser = users.filter(user => user.id % 2 === 0);
console.log(resultUser);

// 3  Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let resultSortUser = users.sort((a, b) => a.id - b.id);
console.log(resultSortUser);


// 4 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
// товарів)  створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname , email, phone, order ) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = [];
clients.push(
    new Client(1,'Jon','Hora','jon@gmai','+0380967858432',['item1','item2','item3']),
    new Client(3,'Anna','Tres','anna@gmail','+860978765434',['item3','item4',]),
    new Client(4,'Roma','Wer','aroma@gmail','+380674859675',['item5','item6','item7']),
    new Client(5,'Venia','Grefar','avena@gmail','+440675949386',['item8',]),
    new Client(6,'Tereza','Miller','ter@gmail','+380977968576',['item9','item10',]),
    new Client(7,'Anna','Tres','anna@gmail','+044856439677',['item11','item112',]),
    new Client(8, 'Eva','Wilson','eva@gmail','+380968794865',['item13','item14','item15']),
    new Client(9, 'Hector','Deoj','hect@gmail','+380968794865',['item16','item17']),
    new Client(10, 'Dina','Lison','dina@gmail','+380658725498',['item18','item19','item20','item21']),
    new Client(11, 'Eva','Wilson','eva@gmail','+380968794865',['item22']),
)
console.log(clients);

// 5  - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості
// товарів в полі order по зростанню. (sort)
let resultSortClient = clients.sort( (a ,b ) => a.order.length - b.order.length) ;
console.log(resultSortClient);

// 6 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer,year,  speed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.speed = speed;
    this.engine = engine;

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.speed} км./год`)
    };
    this.info = function () {
        console.log(`Модель ${this.model}`);
        console.log(`Виробник ${this.manufacturer}`);
        console.log(`Рік випуску ${this.year}`);
        console.log(`Максимальна швидкість ${this.speed}  км/год`);
        console.log(`Об'єм двигуна: ${this.engine} л`);
        if (this.driver) {
            console.log(`Водій: ${this.driver.name}, Вік: ${this.driver.age}`);
        }
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.speed  = this.speed + newSpeed;
    };

    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}
  let myCar  = new Car('Model S', 'Tesla', 2022, 250, 2.0);
console.log(myCar );
    myCar.drive();
    myCar.info();
    myCar.increaseMaxSpeed(140);
console.log(`Нова максимальна швидкість: ${myCar.speed} км/год`);


    myCar .changeYear(2022);
console.log(`Новий рік випуску: ${myCar.year}`);

    myCar .addDriver({ name: 'John Doe', age: 35 });
    myCar .info();

// 7- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car1{
    constructor(model, manufacturer, year, speed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.speed = speed;
        this.engine = engine;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.speed} км/год`);
    }

    info() {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.speed} км/год`);
        console.log(`Об'єм двигуна: ${this.engine} л`);
        if (this.driver) {
            console.log(`Водій: ${this.driver.name}, Вік: ${this.driver.age}`);
        }
    }
    increaseMaxSpeed(newSpeed) {
        this.speed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}
let myCar1 = new Car1('Model S', 'Tesla', 2022, 250, 2.0);
console.log(myCar1);

myCar1.drive()
myCar1.info();

myCar.increaseMaxSpeed(250);
console.log(`Нова максимальна швидкість: ${myCar1.speed} км/год`);

myCar1.changeYear(2024);
console.log(`Новий рік випуску: ${myCar1.year}`);

myCar1.addDriver({ name: 'John Doe', age: 35 });
myCar1.info();

// 8 -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{
    constructor(name,age,shoeSize) {
       this.name = name;
       this.age = age;
       this.shoeSize = shoeSize;
    }
}
let cinderellas = [
    new Cinderella('Eva',20, 36),
    new Cinderella('Ana', 18, 38),
    new Cinderella('Roza',21, 39),
    new Cinderella('Asia',19, 36),
    new Cinderella('Fiona',23, 35),
    new Cinderella('Dina', 20, 39),
    new Cinderella('Inna', 18, 36),
    new Cinderella('Jana', 21, 37),
    new Cinderella('Ira', 20, 35),
    new Cinderella('Hanna', 19, 38),
];

class Prince{
    constructor(name,age,foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }

    findCinderella(cinderellas) {
    for (let cinderella of cinderellas) {
        if (cinderella.shoeSize === this.foundShoeSize) {
            return cinderella;
        }
    }
    return null;
}
}
let prince = new Prince('Arthur', 25, 35);

let foundCinderella = prince.findCinderella(cinderellas);

if (foundCinderella) {
    console.log(`Принц ${prince.name} знайшов свою Попелюшку! Її звуть ${foundCinderella.name}.`);
} else {
    console.log('Попелюшка не знайдена.');
}

let foundCinderellaWithFind = cinderellas.find(cinderella => cinderella.shoeSize === prince.foundShoeSize);

if (foundCinderellaWithFind) {
    console.log(`Принц ${prince.name} знайшов свою Попелюшку через метод find! Її звуть ${foundCinderellaWithFind.name}.`);
} else {
    console.log('Попелюшка не знайдена.');
}

// 9 *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (callback){
    const yourArray = this;
    for (const item of yourArray) {
            callback(item);
    }
};
['pose','iris','tulio'].myForEach((flowers) => console.log(flowers));

Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
const filteredFlowers = ['pose', 'iris', 'tulio'].myFilter(flower => flower.length > 4);
console.log(filteredFlowers);