// const standartScroll = document.getElementById("standartScroll");
// const throttledScroll = document.getElementById("throttledScroll");

// const eventScrollCounter = {
//   standart: 0,
//   throttled: 0,
// };

// document.addEventListener("scroll", () => {
//   eventScrollCounter.standart += 1;
//   standartScroll.textContent = eventScrollCounter.standart;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventScrollCounter.throttled += 1;
//     throttledScroll.textContent = eventScrollCounter.throttled;
//   }, 1000)
// );

// //! ========
// const standartResize = document.getElementById("standartResize");
// const throttledResize = document.getElementById("throttledResize");

// const eventResizeCounter = {
//   standart: 0,
//   throttled: 0,
// };

// window.addEventListener("resize", () => {
//   eventResizeCounter.standart += 1;
//   standartResize.textContent = eventResizeCounter.standart;
// });

// window.addEventListener(
//   "resize",
//   _.throttle(() => {
//     eventResizeCounter.throttled += 1;
//     throttledResize.textContent = eventResizeCounter.throttled;
//   }, 1000)
// );

//! ========

// const inputName = document.getElementById("inputName");

// inputName.addEventListener(
//   "input",
//   _.debounce(
//     ({ target }) => {
//       //let target = event.target
//       console.log(target.value);
//     },
//     1000,
//     {
//       leading: true, // 1 виконання буде одразу
//       trailing: false,
//     }
//   )
// );

//! ========

// const form = document.getElementById("form");
// const inputName = document.getElementById("inputName");

// const classes = {
//   wrong: "wrong",
//   correct: "correct",
// };

// form.addEventListener(
//   "input",
//   _.debounce(({ target }) => {
//     // if (target === inputName) {
//     //   if (target.value.length <= 1 || target.value.length >= 8) {
//     //     target.classList.add(classes.wrong);
//     //     target.classList.remove(classes.correct);
//     //   } else {
//     //     target.classList.remove(classes.wrong);
//     //     target.classList.add(classes.correct);
//     //   }
//     // } else {
//     //   if (target.value.length <= 3 || target.value.length >= 10) {
//     //     target.classList.add(classes.wrong);
//     //     target.classList.remove(classes.correct);
//     //   } else {
//     //     target.classList.remove(classes.wrong);
//     //     target.classList.add(classes.correct);
//     //   }
//     // }
//     if (target.value.length <= 3 || target.value.length >= 10) {
//       target.classList.add(classes.wrong);
//       target.classList.remove(classes.correct);
//     } else {
//       target.classList.remove(classes.wrong);
//       target.classList.add(classes.correct);
//     }
//   }, 1000)
// );

//! ========

