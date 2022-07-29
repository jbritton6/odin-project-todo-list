import {createBoard} from './board.js';


main();


function main() {
    const content = document.querySelector('div#content');

    content.appendChild(createBoard());
}