import '../styles/styles.css'

function createModalBackground() {
    const modalBackground = document.createElement('div');
    modalBackground.classList.add('modal-background');

    return modalBackground;
}


function createModalForm() {
    const form = document.createElement('form');

    const title = document.createElement('label');
    title.setAttribute('for', 'title');
    title.textContent = 'Title:';
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'title');
    input.setAttribute('name', 'title');

    form.appendChild(title);
    form.appendChild(input);

    return form;
}

function createModal() {
    const modalBackground = createModalBackground();
    const modalForm = createModalForm();

    const modal = document.createElement('div');

    modalBackground.appendChild(modalForm);
    modal.appendChild(modalBackground);

    return modal;
}

export { createModal };