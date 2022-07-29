import './styles/styles.css';


function addForm() {
    const newNoteColumn = document.querySelector('.new-note');
    newNoteColumn.append(createForm());
}


function createForm() {
    const form = document.createElement('div');
    form.classList.add('form');

    return form;
}


export {addForm};