import '../styles/styles.css'

function createTodoList() {
    const todoList = document.createElement('div');
    todoList.classList.add('todo-list');

    return todoList;
}

export { createTodoList };