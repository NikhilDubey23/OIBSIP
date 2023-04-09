const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", function() {
  if (newTaskInput.value) {
    const newTask = document.createElement("li");
    const taskText = document.createTextNode(newTaskInput.value);
    newTask.appendChild(taskText);
    taskList.appendChild(newTask);
    newTaskInput.value = "";
    newTask.addEventListener("click", function() {
      newTask.classList.toggle("completed");
    });
  }
});
