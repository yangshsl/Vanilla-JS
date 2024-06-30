const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

function paintToDo(newToDo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');
  button.innerText = '❌';
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newToDo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  paintToDo(newTodo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);