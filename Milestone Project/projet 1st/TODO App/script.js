let todoList = [];

function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const todoListUl = document.getElementById("todo-list");
  const todoText = todoInput.value.trim();
  
  if (todoText !== "") {
    todoList.push(todoText);
    todoInput.value = "";
    const newTodoLi = document.createElement("li");
    newTodoLi.innerText = todoText;
    todoListUl.appendChild(newTodoLi);
  }
}