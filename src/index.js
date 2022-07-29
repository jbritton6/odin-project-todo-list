import {createBoard} from './board.js';
import './styles/styles.css'


main();


function main() {
    const content = document.querySelector('div#content');

    content.appendChild(createBoard());
}