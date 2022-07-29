import './styles/styles.css'


main();

function main() {
    const content = document.querySelector('div#content');

    content.appendChild(board());
}

function board() {
    const element = document.createElement('div');
    element.classList.add('board');

    return element;
}