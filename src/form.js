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
    form.appendChild(createName());
    form.appendChild(createDescription());
    form.appendChild(createDueDate());

    return form;
}


function createName() {
    const nameLabel = document.createElement('label');
    nameLabel.classList.add('form-label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Todo:';

    const nameInput = document.createElement('input');
    nameInput.setAttribute('id', 'name')
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('required', 'required');

    const container = document.createElement('div');
    container.classList.add('form-element');
    container.appendChild(nameLabel);
    container.appendChild(nameInput);

    return container;
}


function createDescription() {
    const descriptionLabel = document.createElement('label');
    descriptionLabel.classList.add('form-label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.textContent = 'Description';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('id', 'description');
    descriptionInput.setAttribute('required', 'required');

    const container = document.createElement('div');
    container.classList.add('form-element');
    container.appendChild(descriptionLabel);
    container.appendChild(descriptionInput);

    return container;
}


function createDueDate() {
    const dueDateLabel = document.createElement('lable');
    dueDateLabel.classList.add('form-label');
    dueDateLabel.setAttribute('for', 'due-date');
    dueDateLabel.textContent = 'Due Date';

    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('id', 'due-date');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('required', 'required');

    const container = document.createElement('div');
    container.classList.add('form-element');
    container.appendChild(dueDateLabel);
    container.appendChild(dueDateInput);

    return container;
}


export {addForm};