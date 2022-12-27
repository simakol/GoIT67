// "use strict";

// const obj = {
//   objInside: {
//     showCxtInside: () => console.log(this),
//   },
//   showCxtOutside: () => console.log(this),
// };

// console.log(obj.showCxtOutside());
// console.log(obj.objInside.showCxtInside());

//!========================================

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);
// console.log("🚀 ~ tags", tags);

// const uniqueTags = tags.reduce((acc, tag) => {
//   if (!acc.includes(tag)) acc.push(tag);
//   return acc;
// }, []);
// console.log("🚀 ~ uniqueTags", uniqueTags);

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.

// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// /*
//     1. (acc = {}, tag="js") => {
//         if (!acc.hasOwnProperty(tag)) { true
//             acc[tag] = 0; -> acc["js"] = 0 -> {js: 0}
//         }

//         acc[tag] += 1;
//         => acc["js"] += 1 => {js: 1}

//         return acc; => {js: 1}
//     }

//     2. (acc = {js: 1}, tag="nodejs") => {
//         if (!acc.hasOwnProperty(tag)) { true
//             acc[tag] = 0; -> acc["nodejs"] = 0 -> {nodejs: 0, js: 1}
//         }

//         acc[tag] += 1;
//         => acc["nodejs"] += 1 => {nodejs: 1, js: 1}

//         return acc; => {nodejs: 1, js: 1}
//     }

//     6. (acc = {nodejs: 1, js: 1, html: 2, css: 1}, tag="js") => {
//         if (!acc.hasOwnProperty(tag)) { false
//           -------
//         }

//         acc[tag] += 1;
//         => acc["js"] += 1 => {nodejs: 1, js: 2, html: 2, css: 1}

//         return acc; => {nodejs: 1, js: 2, html: 2, css: 1}
//     }
// };

// */

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = (tags) => tags.reduce(getTagStats, {});

// /*

// const countTags = (tags) => tags.reduce((acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// }, {});

// */

// const tagCount = countTags(tags);
// console.log(tagCount);

//!========================================

//* Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const currentStone = this.stones.find(({ name }) => stoneName === name);

//     // const { price, quantity } = currentStone;

//     // return price * quantity;

//     return currentStone.price * currentStone.quantity;
//   },
// };

// // chopShop === this
// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

// // function calcTotalPrice(stoneName) {
// //   console.log(this);
// //   const currentStone = this.stones.find(({ name }) => stoneName === name);

// //   // const { price, quantity } = currentStone;

// //   // return price * quantity;

// //   return currentStone.price * currentStone.quantity;
// // }

// // console.log(calcTotalPrice.call(chopShop, "Emerald"));

//!========================================

//* Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       showCtx() {
//         console.log(this);
//       },
//       id: this.generateId(),
//       createdAt: this.getDate(),
//       //   id: phonebook.generateId(),
//       //   createdAt: phonebook.getDate(),
//     };

//     console.dir(newContact);

//     console.log(newContact.showCtx.call(phonebook)); // phonebook -> this
//     console.log(newContact.showCtx()); // newContact -> this
//     this.contacts.push(newContact);
//     return this.contacts;
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

/*
    1. this визначається не на момент створення функції, а при її виклику
    2. this - це обʼєкт, який викликає функцію/метод
*/

//!========================================

//* Example 3 - Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

// const calculator = {
//   a: 0,
//   b: 0,
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(5, 10);
// console.log(calculator);
// console.log(calculator.add()); // 15
// console.log(calculator.mult()); // 50

//!========================================

// "use strict";
// function globalFunc() {
//   console.log(this);
// }
// const globalArrowFunc = () => {
//   console.log(this);
// };

// console.log(this); // ?
// globalFunc(); // ?
// globalArrowFunc(); // ?

//!========================================

// "use strict";

// const user = {
//   name: "Bob",
//   userThis: {
//     thisUser: this,
//   },
//   func() {
//     console.log(this);
//     // const arrowFunc = () => {
//     //   console.log(this);
//     // };
//     // console.log(arrowFunc());
//   },
//   arrowFunc: () => {
//     console.log(this);
//   },
// };

// console.log(user.userThis.thisUser);
// console.log(user.userThis); // ?
// user.func(); // ?
// user.arrowFunc(); // ?

//!========================================

const hotel = {
  username: "Resort hotel",
  showThis() {
    const foo = () => {
      // Стрілки запам'ятовують контекст під час оголошення
      // з батьківської області видимості
      console.log("this in foo: ", this);
    };

    foo();
    console.log("this in showThis: ", this);
  },
};

hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}
