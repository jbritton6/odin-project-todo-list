import '../styles/styles.css'

function createModalBackground() {
    const modalBackground = document.createElement('div');
    modalBackground.classList.add('modal-background');

    return modalBackground;
}

function createFormTextInput(labelTitle, identifier) {
    const label = document.createElement('label');
    label.setAttribute('for', identifier);
    label.textContent = labelTitle;

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', identifier);
    input.setAttribute('name', identifier);

    const container = document.createElement('div');
    container.appendChild(label);
    container.appendChild(input);

    return container;
}


function createModalForm() {
    const form = document.createElement('form');

    form.appendChild(createFormTextInput('Title:', 'title'));

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