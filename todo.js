let tasks = [];
let currentTaskIndex = -1;

function addTask() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('taskDueDate').value;

    if (title && description && dueDate) {
        const task = {
            title,
            description,
            dueDate,
            completed: false
        };

        tasks.push(task);
        displayTasks();
        clearInputFields();
    } else {
        alert('Please fill in all the fields.');
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${task.title} - ${task.description} (Due: ${task.dueDate})`;
        li.classList.add(task.completed ? 'completed' : 'incomplete');
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index));

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => showCompletionPopup(index));

        li.appendChild(deleteButton);
        li.appendChild(completeButton);
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function showCompletionPopup(index) {
    currentTaskIndex = index;
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('taskPopup');
    
    overlay.style.display = 'block';
    popup.style.display = 'block';
}

function closePopup() {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('taskPopup');

    overlay.style.display = 'none';
    popup.style.display = 'none';
}

function completeTask() {
    tasks[currentTaskIndex].completed = true;
    displayTasks();
    closePopup();
}

function clearInputFields() {
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskDueDate').value = '';
}
