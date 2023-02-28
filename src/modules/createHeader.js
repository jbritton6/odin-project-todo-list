import '../styles/styles.css'

function createTitle(title) {
    const titleContainer = document.createElement('h1');
    titleContainer.textContent = title;

    return titleContainer;
}

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    header.appendChild(createTitle('Todo List'));

    return header;
}

export { createHeader };