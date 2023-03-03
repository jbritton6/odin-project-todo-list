import { createTodo } from "./createTodo";

function storeTodo() {
    const title = document.querySelector('#title').value;
    const project = document.querySelector('#project').value;
    const dueDate = document.querySelector('#due-date').value;
    const priority = document.querySelector('input[type=radio]:checked').value

    const todo = {
        title,
        project,
        dueDate,
        priority,
    };

    localStorage.setItem(
        `todo-${(new Date()).getMilliseconds()}`,
        JSON.stringify(todo)
    );

    document.querySelector('form').reset();
}

function displayTodos() {
    const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = '';

    for (let key in localStorage) {
        if (key.includes('todo')) {
            const todo = createTodo(localStorage.getItem(key));
            todoList.appendChild(todo);
        }
    }
}

function clear() {
    let arr = [];

    for (let key in localStorage) {
        if (key.includes('todo')) {
            arr.push(key);
        }
    }

    for (let key in arr) {
        localStorage.removeItem(key);
    }
}

export {
    storeTodo,
    displayTodos,
    clear,
};