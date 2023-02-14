import { saveTask, loadTasks, deleteTask, updateTask } from "./api.js";

let currentId = 1;

const myInput = document.getElementById("myInput");

function fillTasksList() {
  loadTasks()
    .then((tasks) => {
      tasks.forEach(({ text, isDone, id }) => createLI(text, isDone, id));
      return tasks;
    })
    .then((tasks) => {
      currentId = tasks.length !== 0 ? tasks[tasks.length - 1].id + 1 : 1;
    });
}

function addNewTask() {
  const inputValue = myInput.value.trim();
  if (inputValue === "") {
    alert("You must write something!");
    return;
  }
  createLI(inputValue);
  myInput.value = "";
  addTaskToDB(inputValue);
}

function createLI(text, isDone = false, id = currentId) {
  const liEL = document.createElement("LI");
  const liText = document.createTextNode(text);
  liEL.appendChild(liText);
  liEL.dataset.id = id;
  if (isDone) liEL.classList.add("checked");
  myUL.appendChild(liEL);
  addCross(liEL);
}

function handleTaskBehaviour({ target }) {
  if (target.tagName === "LI") {
    target.classList.toggle("checked");
    updateTask({
      id: +target.dataset.id,
      status: target.classList.contains("checked"),
    });
  } else if (target.classList.contains("close")) {
    target.parentNode.remove();
    deleteTask(target.parentNode.dataset.id);
  }
}

function addCross(target) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  target.appendChild(span);
}

function createTaskObject(text, isDone) {
  return {
    text,
    isDone,
  };
}

function addTaskToDB(text, isDone = false) {
  saveTask(createTaskObject(text, isDone));
  currentId += 1;
}

export { addNewTask, handleTaskBehaviour, fillTasksList };
