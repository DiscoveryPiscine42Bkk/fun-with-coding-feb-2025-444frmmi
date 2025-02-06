function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    let taskText = prompt("Enter a new TO DO:");
    if (taskText) {
        let tasks = getTasks();
        tasks.unshift(taskText);
        saveTasks(tasks);
        renderTasks();
    }
}

function removeTask(index) {
    if (confirm("Do you really want to delete this TO DO?")) {
        let tasks = getTasks();
        tasks.splice(index, 1);
        saveTasks(tasks);
        renderTasks();
    }
}

function renderTasks() {
    let ftList = document.getElementById("ft_list");
    ftList.innerHTML = "";
    let tasks = getTasks();
    tasks.forEach((task, index) => {
        let taskDiv = document.createElement("div");
        taskDiv.className = "task";
        taskDiv.textContent = task;
        taskDiv.onclick = () => removeTask(index);
        ftList.appendChild(taskDiv);
    });
}

document.addEventListener("DOMContentLoaded", renderTasks);
