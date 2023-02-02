// let foo = 0;

// const promise = new Promise((resolve, reject) => {
//   if (foo === 0) resolve("OKAY. FOO IS 0");
//   else reject(new Error(`ERROR. FOO IS ${foo}`));
// });

// promise
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err))
//   .finally(() => console.log("Promice end!"));

// let promiceData = undefined;

// new Promise((resolve, reject) => {
//     resolve(5)
// })

// Promise.resolve(5).then((data) => {
//   console.log(data);
//   promiceData = data;
// });

// setTimeout(() => console.log(promiceData), 1);

//! =======

// console.log("top");

// new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("timer callback 0");
//   }, 0);
//   resolve();
// })
//   .then(() => {
//     console.log("then callback 1");
//   })
//   .then(() => {
//     console.log("then callback 2");
//   });

// console.log("bottom");

//! =======

/*

ScriptQueue:  console.log("Создание промиса"); console.log("Конец скрипта");

promiseJobjs: console.log("Обработка промиса");

callbackQueue: timeout()


*/

// setTimeout(function timeout1() {
//   console.log("Таймаут 2");
// }, 500);

// setTimeout(function timeout() {
//   console.log("Таймаут");
// }, 0);

// let p = new Promise(function (resolve, reject) {
//   console.log("Создание промиса");
//   resolve();
// });

// p.then(function () {
//   console.log("Обработка промиса");
// });

// console.log("Конец скрипта");

//! =======

// new Promise((res, rej) => {
//     rej(0);
//     res("sd.fkjsdfklsjdf")
// })
// .then(console.log)
// .catch(console.error)

//! =======

// console.log("Request data....");

// setTimeout(() => {
//   console.log("Prepearing data...");

//   const data = {
//     id: 1,
//     text: "lorem ipsum",
//     status: true,
//   };

//   setTimeout(() => {
//     console.log("Data received: ", data);
//   }, 2000);
// }, 2000);

//! =======

// console.log("Request data....");

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Prepearing data...");

//     const data = {
//       id: 1,
//       text: "lorem ipsum",
//       status: true,
//     };
//     if (!data.id) reject(new Error("NO ID!"));
//     else if (!data.status) reject(new Error("NO Status!"));
//     resolve(data);
//   }, 2000);
// });

// promise
//   .then((data) => {
//     // setTimeout(() => {
//     //   console.log("Data received: ", data);
//     // }, 2000);
//     return new Promise((res, rej) => {
//       data.status = !data.status;
//       //   rej(new Error("2 promise"));
//       res(data);
//     });
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error("ERROR: ", err);
//   })
//   .finally(() => console.log("PROMISE END"));

//! =======

const sleep = (ms) => new Promise((res) => setTimeout(() => res(ms), ms));

// sleep(1000).then(() => console.log("Promise 1000"));

// Promise.all([sleep(1000), sleep(5000), sleep(3000)]).then((data) =>
//   console.log("all promises: ", data)
// );

Promise.race([sleep(1000), sleep(5000), sleep(3000)]).then((data) =>
  console.log("race promises: ", data)
);
