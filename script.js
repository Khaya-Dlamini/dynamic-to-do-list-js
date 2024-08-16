document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
 
      function addTask (){
     var taskText = taskInput.value.trim();
 
     if (taskText === ''){
         alert('enter a task')
         return;}
 
         const list = document.createElement('li');
         list.textContent = taskText
     
 
     const removeButton = document.createElement('button');
     removeButton.textContent = 'Remove';
     removeButton.className = 'remove-btn';
 
     removeButton.onclick = function() {
         taskList.removeChild(list);
         classList.add
     };
 
     list.appendChild(removeButton);
 
     taskList.appendChild(list);
     taskInput.value = '';
    }
 
    addButton.addEventListener('click', addTask);
 
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        addTask(); 
    });
 
 });



 // Function to load tasks from Local Storage
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Function to add a new task
function addTask(taskText, save = true) {
    const taskList = document.getElementById('taskList');

    // Create a new li element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a new remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // Assign onclick event to remove the li element and update Local Storage
    removeButton.onclick = function() {
        taskList.removeChild(li);
        removeTaskFromLocalStorage(taskText);
    };

    // Append the remove button to the li element
    li.appendChild(removeButton);

    // Append the li element to the task list
    taskList.appendChild(li);

    // Save the task to Local Storage if save is true
    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

// Function to remove a task from Local Storage
function removeTaskFromLocalStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}

// Event listener for add button click
document.getElementById('addButton').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        taskInput.value = ''; // Clear the task input field
    }
});

// Event listener for 'Enter' key press in task input
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const taskText = this.value.trim();
        if (taskText) {
            addTask(taskText);
            this.value = ''; // Clear the task input field
        }
    }
});

// Event listener for DOMContentLoaded to load tasks from Local Storage
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});
