import '../styles/styles.css'

function createModalBackground() {
    const modalBackground = document.createElement('div');
    modalBackground.classList.add('modal-background');

    return modalBackground;
}

function createModal() {
    const modalBackground = createModalBackground();

    const modal = document.createElement('div');

    modal.appendChild(modalBackground);

    return modal;
}

export { createModal };