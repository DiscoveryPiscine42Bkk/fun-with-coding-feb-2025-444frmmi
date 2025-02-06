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
    let ftList = $("#ft_list");
    ftList.empty(); // ใช้ jQuery แทน innerHTML = ""
    
    let tasks = getTasks();
    tasks.forEach((task, index) => {
        let taskDiv = $("<div></div>").addClass("task").text(task);
        taskDiv.click(() => removeTask(index)); // ใช้ jQuery แทน onclick
        ftList.append(taskDiv);
    });
}

$(document).ready(function() {
    $("#newTaskBtn").click(addTask); // ใช้ jQuery แทน onclick
    renderTasks();
});
