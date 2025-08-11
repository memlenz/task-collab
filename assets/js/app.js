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