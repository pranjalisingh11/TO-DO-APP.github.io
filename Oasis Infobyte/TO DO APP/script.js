const addForm = document.getElementById("addForm");
const taskInput = document.getElementById("taskInput");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

addForm.addEventListener("submit", addTask);

function addTask(e) {
    e.preventDefault();
    const task = taskInput.value;
    if (task.trim() === "") {
        return;
    }
    const li = document.createElement("li");
    li.textContent = task;
    const completeButton = document.createElement("button");
    completeButton.textContent = "  Complete";
    completeButton.addEventListener("click", completeTask);
    li.appendChild(completeButton);
    pendingList.appendChild(li);
    taskInput.value = "";
}

function completeTask(e) {
    const taskItem = e.target.parentNode;
    const taskText = taskItem.textContent;
    const completedLi = document.createElement("li");
    completedLi.textContent = taskText;
    completedList.appendChild(completedLi);
    taskItem.remove();
}
