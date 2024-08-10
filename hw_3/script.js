// 1- За допомогою циклу for і document.write() вивести 10 блоків div c довільним тексто

for (let counter = 0; counter < 10 ; counter++) {

    document.write(`
<div class="one">
 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quam.</p>
</div>`)

}
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let counter = 0; counter < 10 ; counter++) {
    document.write(`
<div>
 <p> ${counter+1}. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quam.</p>
</div>`)

}

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let block = 1;
while (block <= 20) {
   document.write(`
<div>
 <p class="block"> Lorem ipsum dolor sit amet.</p>
</div>`)
    block++;
}
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let bloc = 1;
while (bloc <= 20) {
    document.write(`
<div>
 <p> ${bloc}. Lorem ipsum dolor sit amet.</p>
</div>`);
    bloc++;
}

//Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<ul class="list"> <li>${listOfItems[i]}</li></ul>`);
}

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

    for (const product of products) {
    document.write
    (` <div>
            <h3>${product.title} ${product.price}</h3>
            <img src="${product.image}" alt="${product.title}">
            
       </div>`);
}

// за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
   let arrTrue = [];
   let arrFalse = [];
   let arrAge = [];

  for ( let i=0; i < users.length; i++) {
            let user = users[i];
            if ( user.status){
                arrTrue[arrTrue.length] = user;
            }else{
                arrFalse[arrFalse.length] = user;
            }if (user.age === 30){
                arrAge[arrAge.length] = user;
      }
}
console.log(arrFalse);
console.log(arrTrue);
console.log(arrAge);



