const URL = "https://63ebca8c32a0811723922be1.mockapi.io/api/todos/";

function saveTask(taskObj) {
  console.log("POST");
  // const options = {
  //   method: "POST",
  //   body: JSON.stringify(taskObj),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  // return fetch(URL, options).catch(console.log);

  return axios.post(URL, taskObj).catch(console.log);
}

function loadTasks() {
  console.log("GET");
  // return fetch(URL)
  //   .then((data) => data.json())
  //   .catch(console.log);
  return axios
    .get(URL)
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch(console.log);
}

function deleteTask(id) {
  console.log("DELETE");
  // return fetch(`${URL}/${id}`, {
  //   method: "DELETE",
  // }).catch(console.log);

  return axios.delete(`${URL}/${id}`).catch(console.log);
}

function updateTask({ id, status }) {
  console.log("PUT");
  // const options = {
  //   method: "PUT",
  //   body: JSON.stringify({ isDone: status }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  // return fetch(`${URL}/${id}`, options).catch(console.log);

  return axios.put(`${URL}/${id}`, { isDone: status }).catch(console.log);
}

export { saveTask, loadTasks, deleteTask, updateTask };
