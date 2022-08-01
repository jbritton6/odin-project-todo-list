import './styles/styles.css';


function addForm() {
    const newNoteColumn = document.querySelector('.new-note');
    newNoteColumn.append(createForm());
}


function createForm() {
    const form = document.createElement('div');
    form.classList.add('form');

    const title = document.createElement('p');
    title.textContent = 'New todo';

    form.appendChild(title);
    form.appendChild(createTitle());

    return form;
}


function createTitle() {
    const titleLabel = document.createElement('label');
    titleLabel.classList.add('form-title');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Title:';

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('required', 'required');

    const container = document.createElement('div');
    container.classList.add('form-element');
    container.appendChild(titleLabel);
    container.appendChild(titleInput);

    return container;
}


export {addForm};