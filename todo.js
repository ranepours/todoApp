//window.localStorage.setItem();

const input = document.querySelector('#todo');
const addTodo = document.querySelector('#add-todo');
const todoList = document.querySelector('#todo-list');

document.addEventListener('DOMContentLoaded', getTodos)

addTodo.addEventListener('submit', function(e){
    e.preventDefault();
    const newTodo = document.createElement('li');
    newTodo.innerText  = input.value;
    todoList.appendChild(newTodo);
    //ADD TODO TO LOCAL STORAGE
    saveTodos(input.value);
    input.value = '';
    const remove = document.createElement('button');
    remove.innerText = 'delete';
    newTodo.appendChild(remove);
})

todoList.addEventListener('click', function(e){
    const lineThrough = e.target.classList.add('idk');
    if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    } else if (e.target.tagName === 'LI'){
        lineThrough;
    }
});

todoList.addEventListener('dblclick', function(e){
    const undoLineThrough = e.target.classList.remove('idk');
    if (e.target.tagName === 'LI'){
        undoLineThrough;
    }
})

function saveTodos(addTodo){
    let todos;
    if(localStorage.getItem('todos') === null ){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(addTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if(localStorage.getItem('todos') === null ){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        const newTodo = document.createElement('li');
        newTodo.innerText  = todo;
        todoList.appendChild(newTodo);
        const remove = document.createElement('button');
        remove.innerText = 'delete';
        newTodo.appendChild(remove); 
    })
}