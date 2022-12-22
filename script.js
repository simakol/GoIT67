// const arr = [3, 5, 2, 6, 3, 6, 3, 63, 2, 6, 2];

// const sum = arr.reduce((acc, elem) => (acc += elem), 0);

// // .reduce(callback, initialValue) | callback(accum, el, i, arr)
// /*
//  1. (acc = 0, elem = 3) => 0 + 3 -> acc на наступній ітерації = 3
//  2. (acc = 3, elem = 5) => 3 + 5 -> acc на наступній ітерації = 8
//  3. (acc = 8, elem = 2) => 8 + 2 -> acc на наступній ітерації = 10
// */

// console.log("🚀 ~ sum", sum)

//!===================================================

// const arr = [4, 3, 1, 8, 4, 9, 10, 2, 5, 6, 7];

// // arr.sort((a, b) => a - b); // за зростанням
// // arr.sort((a, b) => b - a); // за спаданням

// console.log(arr);

//!===================================================

// П можете роз’яснити фільтрування за унікальним значенням. Вроді розумію, але не до кінця. Чи потрібно прописувати три параметри завжди? Дякую

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap((student) => student.courses);
// console.log("🚀 ~ allCourses", allCourses);

// const uniqueCourses = allCourses.filter((course, index, array) => {
//   console.log(course, index);
//   /*
//     1. (course = математика, index = 0, array) => array.indexOf(математика) === 0; -> 0 === 0
//     ...
//     4. (course = математика, index = 3, array) => array.indexOf(математика) === 3; -> 0 === 3

//     ==========
//     2. (course = фізика, index = 1, array) => array.indexOf(фізика) === 1; -> 1 === 1
//     5. (course = фізика, index = 4, array) => array.indexOf(фізика) === 4; -> 1 === 4
//   */
//   return array.indexOf(course) === index;
// });

// const uniqueCourses = [...new Set(allCourses)]
// console.log("🚀 ~ uniqueCourses", uniqueCourses);

//!===================================================

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

//* Example 1 Метод map
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const getModels = (cars) => cars.map((car) => car.model);

// console.table(getModels(cars));

//* Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => {
//     /*
//         1. Зробити копію обʼєкту
//         2. Змінити ціну на ціну зі знижкою
//     */
//     const newCar = { ...car };
//     newCar.price = newCar.price * (1 - discount);
//     return newCar;
//   });

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({ ...car, price: car.price * (1 - discount) }));

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// console.table(cars);

//* Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) =>
//   cars.filter((car) => car.price <= threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

//* Example 6 - Метод find

// const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

//* Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.

// const sortByAscendingAmount = (cars) =>
//   [...cars].sort((a, b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));

// console.table(cars);

//* Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// const getTotalAmount = (cars) =>
//   cars.reduce((total, car) => total + car.amount);

// console.log(getTotalAmount(cars));

//* Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = (cars) =>
//   cars.filter((car) => car.onSale === true).sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));
