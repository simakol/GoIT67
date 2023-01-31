// Написати таймер зворотнього відліку до Нового року який можна зупиняти при кліку на кнопку **Stop**

/*
    1. задати дату наступного Нового року (поточний рік + 1)
    2. задати поточну дату і відняти її від дати Нового року (отримаємо різницю дат в мілісекундах)
    3. витягнемо з кількості мілісекуд дні, години, хвилини і секунди
    4. запихнути ці дані у параграф
    5. очистити таймер по натисканню на кнопку стоп
*/

//! 1 task

// const timer = document.getElementById("timer");
// const stopBtn = document.getElementById("stopBtn");
// const startBtn = document.getElementById("startBtn");

// const countDownDate = new Date(`Jan 1, ${new Date().getFullYear() + 1}`);

// countDownTimeToNY();

// let intervalId = setInterval(countDownTimeToNY, 1000);

// stopBtn.addEventListener("click", stopTimer);
// startBtn.addEventListener("click", startTimer);

// function countDownTimeToNY() {
//   const now = Date.now();
//   // const now = new Date().getTime();
//   const diff = countDownDate - now;

//   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//   const minutes = Math.floor((diff / (1000 * 60)) % 60);
//   const seconds = Math.floor((diff / 1000) % 60);

//   timer.textContent = `${days} d. ${addZero(hours)} h. ${addZero(
//     minutes
//   )} m. ${addZero(seconds)} s.`;
// }

// function startTimer() {
//   startBtn.disabled = true;
//   stopBtn.disabled = false;
//   intervalId = setInterval(countDownTimeToNY, 1000);
// }

// function stopTimer() {
//   stopBtn.disabled = true;
//   startBtn.disabled = false;
//   clearInterval(intervalId);
// }

// function addZero(number) {
//   return String(number).padStart(2, 0);
// }

//! 2 task

const timer = document.getElementById("timer");
const btn = document.getElementById("btn");
const BUTTONS_UI = {
  activeBtn: "stop",
  start: {
    text: "Start",
    class: "start",
  },
  stop: {
    text: "Stop",
    class: "stop",
  },
};

const countDownDate = new Date(`Jan 1, ${new Date().getFullYear() + 1}`);

countDownTimeToNY();

let intervalId = setInterval(countDownTimeToNY, 1000);

btn.addEventListener("click", handleButtonBehaviour);

function countDownTimeToNY() {
  const now = Date.now();
  const diff = countDownDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.textContent = `${days} d. ${addZero(hours)} h. ${addZero(
    minutes
  )} m. ${addZero(seconds)} s.`;
}

function handleButtonBehaviour() {
  const { activeBtn } = BUTTONS_UI;
  
  if (activeBtn === "stop") {
    clearInterval(intervalId);
    BUTTONS_UI.activeBtn = "start";
    btn.classList.add(BUTTONS_UI.start.class);
    btn.classList.remove(BUTTONS_UI.stop.class);
    btn.textContent = BUTTONS_UI.start.text;
  } else if (activeBtn === "start") {
    intervalId = setInterval(countDownTimeToNY, 1000);
    BUTTONS_UI.activeBtn = "stop";
    btn.classList.add(BUTTONS_UI.stop.class);
    btn.classList.remove(BUTTONS_UI.start.class);
    btn.textContent = BUTTONS_UI.stop.text;
  }
}

function addZero(number) {
  return String(number).padStart(2, 0);
}
