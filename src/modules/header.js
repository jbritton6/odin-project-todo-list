import '../styles/styles.css'

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    return header;
}

export { createHeader };