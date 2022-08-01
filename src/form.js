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
    form.appendChild(createProjectName());

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
    const dueDateLabel = document.createElement('label');
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


function createProjectName() {
    const projectNameLabel = document.createElement('label');
    projectNameLabel.classList.add('form-label');
    projectNameLabel.setAttribute('for', 'project-name');
    projectNameLabel.textContent = 'Project';

    const projectNameInput = document.createElement('input');
    projectNameInput.setAttribute('id', 'project-name');
    projectNameInput.setAttribute('type', 'text');
    projectNameInput.setAttribute('required', 'required');

    const container = document.createElement('div');
    container.classList.add('form-element');
    container.appendChild(projectNameLabel);
    container.appendChild(projectNameInput);

    return container;
}


export {addForm};