import '../styles/styles.css'

function createTitle(title) {
    const titleContainer = document.createElement('h1');
    titleContainer.textContent = title;

    return titleContainer;
}

function toggleDisplay() {
    console.log('hu');
    const element = document.querySelector('.modal-background');
    element.classList.toggle('hide-display');
}

function createAddTodoButton(text) {
    const addTodoButton = document.createElement('button');
    addTodoButton.classList.add('add-todo-button');
    addTodoButton.textContent = text;
    addTodoButton.addEventListener('click', toggleDisplay);

    return addTodoButton;
}

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    header.appendChild(createTitle('Todo List'));
    header.appendChild(createAddTodoButton('+'));

    return header;
}

export { createHeader };