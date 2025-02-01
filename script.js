const addButton = document.getElementById('addButton');

addButton.addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return;

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    
    li.innerHTML = `
        <span class="task">${taskText}</span>
        <button class="delete">Delete</button>
    `;

    li.querySelector('.task').addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    li.querySelector('.delete').addEventListener('click', function() {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = '';
});
