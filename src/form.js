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

    return form;
}


function createName() {
    const nameLabel = document.createElement('label');
    nameLabel.classList.add('form-title');
    nameLabel.setAttribute('for', 'title');
    nameLabel.textContent = 'Title:';

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('required', 'required');

    const container = document.createElement('div');
    container.classList.add('form-element');
    container.appendChild(nameLabel);
    container.appendChild(nameInput);

    return container;
}





export {addForm};