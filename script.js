// 1. Створити список технологій що вивчаються на курсі Fullstack за допомогою js

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

// Показати як че робиться через **map** та **reduce**

/*
    1. створимо список ul
    2. створення циклу для перебору елементів масиву
    3. створення елементів списку - li
    4. запис тексту з масиву у елемент li
    5. помістити елементи li всередину елементу ul
    6. помістити ul на сторінку
*/

// const container = document.getElementById("container");

// const ulElem = document.createElement("ul");

// for (const technology of technologies) {
//   const liElem = document.createElement("li");
//   liElem.textContent = technology;
//   ulElem.appendChild(liElem);
// }

// container.appendChild(ulElem);

//* map

// const ulElem = document.createElement("ul");

// const listContent = technologies
//   .map((technology) => `<li>${technology}</li>`)
//   .join("");

// ulElem.insertAdjacentHTML("beforeend", listContent);

// container.appendChild(ulElem);

//* reduce

// const listContent = technologies.reduce(
//   (acc, technology) => (acc += `<li>${technology}</li>`),
//   ""
// );

// container.insertAdjacentHTML("beforeend", `<ul>${listContent}</ul>`);

//! ==============================

// Створити кілька кнопок на основі масива з обʼєктами використовуючи createElement

const colors = [
  {
    label: "red",
    color: "#FF0000",
  },
  {
    label: "green",
    color: "#00FF00",
  },
  {
    label: "blue",
    color: "#0000FF",
  },
  {
    label: "yellow",
    color: "#FFFF00",
  },
];

/*
    1. перебір елементів масиву за допомогою циклів
    2. створити кнопку
    3. задати колір кнопки і текст кнопки
    4. додати кнопку на сторінку
*/

const container = document.getElementById("container");

colors.forEach(({ color, label }) => {
  const buttonElem = document.createElement("button");
  buttonElem.textContent = label;
  buttonElem.style.backgroundColor = color;
  buttonElem.classList.add("indents");
  //   buttonElem.style.margin = "10px";
  container.appendChild(buttonElem);
});
