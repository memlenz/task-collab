document.getElementById('task-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  
  if (taskInput.value.trim() === '') return;
  
  const li = document.createElement('li');
  li.textContent = taskInput.value;
  taskList.appendChild(li);
  
  taskInput.value = '';
});

// Drag & Drop
document.querySelectorAll('.task-list').forEach(list => {
  list.addEventListener('dragover', e => {
    e.preventDefault();
  });
  
  list.addEventListener('drop', e => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
    const task = document.getElementById(taskId);
    list.appendChild(task);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#task-list li').forEach(task => {
    task.setAttribute('draggable', 'true');
    task.id = `task-${Date.now()}`;
    
    task.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', e.target.id);
    });
  });
});