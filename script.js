//корисні посилання:

// https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-10/uk.md

//https://habr.com/ru/company/otus/blog/685528/

//!========================================

//* Example 1 - Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

//? email - пошта, рядок
//? age - вік, число
//? numberOfPosts - кількість постів, число
//? topics - масив тем на яких спеціалізується блогер

// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

//? Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

//? Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class User {
//   constructor({ name, age, numberOfPosts, topics }) {
//     //this = {}
//     this.name = name;
//     this.age = !Number(age) ? 0 : Number(age);
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//     return this.numberOfPosts;
//   }
// }

// const user = new User({
//   age: 30,
//   name: "mango@mail.com",
//   numberOfPosts: 200,
//   topics: ["tech", "cooking"],
// });

// const mango = new User({
//   name: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   name: "poly@mail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

//!========================================

//* Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// class User {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(value) {
//     this.#login = value;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(value) {
//     this.#email = value;
//   }
// }

// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log(mango);
// console.log(mango.login);

// mango.login = "qwerty";
// console.log(mango.login);

// console.log(mango);

// console.log(mango.login); // Mango
// mango.login = "Mangodoge";
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// console.log(poly.login); // Poly
// poly.login = "Polycutie";
// console.log(poly.login); // Polycutie

//!========================================

//* Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }

// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// class Notes {
//   static Priority = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGH: "high",
//   };

//   static findNoteByIndex(text, items) {
//     return items.findIndex((note) => note.text === text);
//   }

//   constructor(arr) {
//     this.items = arr;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     const index = Notes.findNoteByIndex(text, this.items);
//     this.items.splice(index, 1);
//   }

//   updatePriority(text, newPriority) {
//     const index = Notes.findNoteByIndex(text, this.items);
//     this.items[index].priority = newPriority;

//     //[{0}, {1}][0] -> {0}.priority = ...
//   }
// }
// console.dir(Notes);

// const myNotes = new Notes([]);

// myNotes.addNote({ text: "Моя перша замітка", priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: "Моя друга замітка",
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// console.log(myNotes);

// myNotes.removeNote("Моя перша замітка");
// console.log(myNotes.items);

// myNotes.updatePriority("Моя друга замітка", Notes.Priority.HIGH);
// console.log(myNotes.items);

//!========================================

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const user = new User("Alex", "Simak");

// console.log(user);

//!========================================

// class Rectangle {
//   constructor(height, width) {
//     this.name = "Rectangle";
//     this.height = height;
//     this.width = width;
//   }
//   sayName() {
//     console.log("Hi, I am a ", this.name + ".");
//   }
//   get area() {
//     return this.height * this.width;
//   }
//   set area(value) {
//     this._area = value;
//   }
// }

// class Square extends Rectangle {
//   constructor(length) {
//     super(length, length);
//     this.name = "Square";
//   }
// }

// const square = new Square(10);

// console.log(square);
// square.sayName();
// console.log(square.area);

//!========================================

// class Vehicle {
//   constructor({ model, color }) {
//     this.model = model;
//     this.color = color;
//   }
//   showInfo() {
//     return `Vehicle: ${this.model} | color: ${this.color}`;
//   }
// }

// class Car extends Vehicle {
//   constructor({ model, color, wheels, amountOfSits, amountOfDoors }) {
//     super({ model, color });
//     this.wheels = wheels;
//     this.amountOfSits = amountOfSits;
//     this.amountOfDoors = amountOfDoors;
//   }
// }

// const car = new Car({
//   model: "Tesla model X",
//   color: "black",
//   wheels: 4,
//   amountOfSits: 8,
//   amountOfDoors: 4,
// });
// console.log(car);
// console.log(car.showInfo());

//!========================================
