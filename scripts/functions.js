import { save, load } from "./storage.js";

const STORAGE_KEY = "tasks";
let currentId = 0;

const myInput = document.getElementById("myInput");

function fillTasksList() {
  const currentState = load(STORAGE_KEY);
  if (currentState !== undefined) {
    currentState.forEach(({ text, isDone, id }) => createLI(text, isDone, id));

    currentId =
      currentState.length !== 0
        ? currentState[currentState.length - 1].id + 1
        : 0;
  }
}

function addNewTask() {
  const inputValue = myInput.value.trim();
  if (inputValue === "") {
    alert("You must write something!");
    return;
  }
  createLI(inputValue);
  myInput.value = "";
  addTaskToStorage(inputValue);
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
  const currentState = load(STORAGE_KEY);
  if (target.tagName === "LI") {
    target.classList.toggle("checked");
    const taskIndex = currentState.findIndex(
      (task) => +task.id === +target.dataset.id
    );
    currentState[taskIndex].isDone = !currentState[taskIndex].isDone;
  } else if (target.classList.contains("close")) {
    target.parentNode.remove();
    const taskIndex = currentState.findIndex(
      (task) => +task.id === +target.parentNode.dataset.id
    );
    currentState.splice(taskIndex, 1);
  }
  save(STORAGE_KEY, currentState);
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
    id: currentId,
  };
}

function addTaskToStorage(text, isDone = false) {
  const currentState = load(STORAGE_KEY);
  if (currentState === undefined) {
    save(STORAGE_KEY, [createTaskObject(text, isDone)]);
  } else {
    currentState.push(createTaskObject(text, isDone));
    save(STORAGE_KEY, currentState);
  }
  currentId += 1;
}

export { addNewTask, handleTaskBehaviour, fillTasksList };
