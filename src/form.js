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

    return form;
}


export {addForm};