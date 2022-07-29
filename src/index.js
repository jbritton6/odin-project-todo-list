import {board} from './board.js';


main();


function main() {
    const content = document.querySelector('div#content');

    content.appendChild(board());
}