// document.body.addEventListener("click", (e) => {
//   console.log(e.target, "- target");
//   console.log(e.currentTarget, "currentTarget");
// });

//! =======================

// Створити калькулятор вартості продукту в залежності від ціни. При роботі з подіями використовувати делегування. Відрендерити всю розмітку через JS

// При змінні данних в інпуті №1 чи №2 автоматично має перераховуватися загальна вартість

// Завжди має відображатися валюта - гривня

// Загальна сума відображається з копійками (2 знаки після коми)

// В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.

// Кольорова підказка має змінювати своє значення при перетягувані повзунка.

// В інпуті №2 мін і мах поріг встановлюєте самостійно.

// При завантаженні сторінки сприпт має автоматично розрахувати вартість на основі даних за замовчуванням які ви встановите в розмітці.

// const form = document.getElementById("form");
// const price = document.getElementById("price");
// const quantity = document.getElementById("quantity");
// const amount = document.getElementById("amount");
// const total = document.getElementById("total");

// const data = {
//   price: 0,
//   quantity: 0,
//   calcTotalPrice() {
//     return (this.price * this.quantity).toFixed(2);
//   },
// };

// //data fill
// dataFill();
// displayTotalPrice();

// //events listener
// form.addEventListener("change", handleFormChange);

// //functions
// function handleFormChange({ target }) {
//   const { value } = target;

//   if (target === quantity) {
//     // data.quantity = value;
//     amount.textContent = value;
//   }
//   //   else if (target === price) {
//   //     data.price = value;
//   //   }

//   target.setAttribute("value", value);
//   dataFill();
//   displayTotalPrice();
// }

// function dataFill() {
//   data.price = price.getAttribute("value");
//   data.quantity = quantity.getAttribute("value");
// }

// function displayTotalPrice() {
//   total.textContent = data.calcTotalPrice() + " грн";
// }

//!==============

const button = document.getElementById("button");
const box = document.getElementById("box");

box.addEventListener("click", (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
  console.dir(event.target);
});
