import '../styles/styles.css'

function createBody() {
    const body = document.createElement('div');
    body.classList.add('body');

    return body;
}

export { createBody };