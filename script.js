// document.body.addEventListener("keydown", handleKeydown);

// function handleKeydown(event) {
//   console.log(event);
// }

/*
 ? TASK
*
* 1. Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега body. Модальне вікно має закриватися при кліку на напівпрозорий оверлей, та на іконку хрестика всередині модалки
*
* 2. Додати в модалку логіку закриття при натисканні на кнопку **Escape**
*/

// const modalWindow = document.getElementById("modalWindow");
// const overlay = document.getElementById("overlay");
// const closeBtn = document.getElementById("closeBtn");
// const openModalBtn = document.getElementById("openModalBtn");
// const modalOpenClass = "modal-open";

// openModalBtn.addEventListener("click", handleModalOpen);
// overlay.addEventListener("click", handleModalOpen);
// closeBtn.addEventListener("click", handleModalOpen);
// document.body.addEventListener("keydown", handleModalCloseOnESC);

// function handleModalCloseOnESC({ key }) {
//   if (key === "Escape" && document.body.classList.contains(modalOpenClass))
//     handleModalOpen();
// }

// function handleModalOpen() {
//   document.body.classList.toggle(modalOpenClass);
// }

//! ================

// const container = document.getElementById("container");
// console.log(container.childNodes);

//! ================

// function foo() {
//   alert(`hello, ${this.name}!`);
// }

// const params = {
//   handleEvent: foo,
//   name: "Alex",
// };

// document.body.addEventListener("click", params);

// setTimeout(() => {
//   document.body.removeEventListener("click", params);
// }, 3000);

//! ================

const link = document.getElementById("link");

link.addEventListener("click", (e) => {
  e.preventDefault();
});
