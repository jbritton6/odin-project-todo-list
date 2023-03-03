import '../styles/styles.css'

function createTodo(todoString) {
    const todoObject = JSON.parse(todoString);

    const todo = document.createElement('div');
    todo.classList.add('todo-element');
    todo.innerText = todoString;

    return todo;
}

export { createTodo };