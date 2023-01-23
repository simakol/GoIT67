// class User {
//   constructor(wishlist = []) {
//     this.wishlist = wishlist;
//   }

//   get item() {
//     return this._item;
//   }

//   set item(newItem) {
//     this.wishlist.push(newItem);
//     this._item = newItem;
//   }
// }
// const misha = new User();

// misha.item = "Nike";
// misha.item = "Adidas";

// console.log(misha.wishlist)
// console.log(misha.item)

// console.log(misha);

// console.log(misha instanceof User);
// console.log(misha instanceof Object);
// console.log(misha instanceof Array);

//! ========================================

// const arr = [2, 6, 3, 78, 4, 78, 4, 54, 3, 8];

// let counter = 0;

// for (const n of arr) {
//   counter += n;
// }

// console.log(counter);

// const sum = arr.reduce((counter, n) => {
//   counter += n;
//   return counter;
// }, 0);

// const sum = arr.reduce((counter, n) => counter + n, 0);
// console.log("🚀 ~ sum", sum);
/*
    1.
const sum = arr.reduce((counter = 0, n = 2) => {
  counter += n; // 0 + 2
  return counter; // counter = 2
}, 0);
    2.
const sum = arr.reduce((counter = 2, n = 6) => {
  counter += n; // 6 + 2
  return counter; // counter = 8
}, 0);
    3.
const sum = arr.reduce((counter = 8, n = 3) => {
  counter += n; // 8 + 3
  return counter; // counter = 11
}, 0);

*/

// const letters = [87, "a", 22, "b", 1, "c", "d", "e", 5, "f", 99, "g"];

// const lettersFiltred = letters.filter((el) => typeof el !== "number");
// const word = lettersFiltred.reduce((acc, letter) => acc + letter, "");
// console.log("🚀 ~ word", word)

//ланцюг
// const letters = [87, "a", 22, "b", 1, "c", "d", "e", 5, "f", 99, "g"]
//   .filter((el) => typeof el !== "number")
//   .reduce((acc, letter) => acc + letter, "");

// console.log("🚀 ~ letters", letters);

//один цикл

// const letters = [87, "a", 22, "b", 1, "c", "d", "e", 5, "f", 99, "g"];

// const word = letters.reduce(
//   (acc, letter) => (typeof letter === "number" ? acc : acc + letter),
//   ""
// );
// const word = letters.reduce((acc, letter) => {
//   if (typeof letter === "number") return acc;
//   else return acc + letter;
// }, "");

// console.log("🚀 ~ word", word);

//! ========================================

// const user = {
//   name: "Alex",
//   eyes: "green",
// };

// function foo(msg) {
//   console.log(this);
//   console.log(`${this.name} has ${this.eyes} eyes color.`);
//   console.log(msg);
//   console.log(msg2);
// }

// foo.call(user, "Hello, world!");
// foo.apply(user, ["Hello, world!"]);

// const later = foo.bind(user, "text");

// later();
// later();

//! ========================================

// const myForm = document.getElementById("myForm");

// myForm.addEventListener("submit", resetForm);

// function resetForm(e) {
//   e.preventDefault();
//   myForm.reset();
// }

/*`HTML`
<form id="myForm">
        First name: <input type="text" name="fname"><br>
        Last name: <input type="text" name="lname"><br><br>
        <input type="submit" value="Reset form">
    </form>

    */

//! ========================================

// const container = document.getElementById("container");
// const signIn = document.getElementById("signIn");
// const signUp = document.getElementById("signUp");
// const activeClass = "active";

// container.addEventListener("click", handleClick);

// function handleClick({ target }) {
//   if (target.textContent === "Приєднатися") {
//     signUp.classList.add(activeClass);
//     signIn.classList.remove(activeClass);
//   } else if (target.textContent === "Вхід") {
//     signUp.classList.remove(activeClass);
//     signIn.classList.add(activeClass);
//   }
// }
/* `CSS`
<style>
.modal-signin,
.modal-signup {
    display: none;
}

.modal-signin.active,
.modal-signup.active {
    display: block;
}
</style>

*/

/*`HTML`

 <p class="modal-signin" id="signIn">Вхід</p>
    <p class="modal-signup" id="signUp">Приєднатися</p>
    <div id="container">
        <button type="button">
            <span>Приєднатися</span>
        </button>

        <button type="button">
            <span>Вхід</span>
        </button>
    </div>
*/

//! ========================================

// for (let i = 0; i <= 10; i += 1) {
//   debugger;
//   console.log(i);
// }

//! ========================================

// container.addEventListener("click", handleClick);

// function handleClick({ target }) {
// //   let target = event.target;
// }

// const a = {
//   name: "Oleg",
//   age: 55,
// };

// const { name, age } = a;

// console.log(name);
// console.log(age);

//! ========================================

// const container = document.getElementById("container");

// const html = '<a href="https://google.com">Link To Google</a>';

// container.insertAdjacentHTML("beforeend", html);
// container.innerHTML = html;

/* `HTML`
 <div id="container">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, beatae?</p>
    </div>

    */
