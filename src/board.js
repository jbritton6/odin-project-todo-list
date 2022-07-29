import './styles/styles.css';


function addBoard() {
    const content = document.querySelector('#content');
    content.appendChild(createBoard());
}


function createBoard() {
    const board = document.createElement('div');

    board.appendChild(createColumn('new-note'));
    board.appendChild(createColumn('column-0'));
    board.appendChild(createColumn('column-1'));
    board.appendChild(createColumn('column-2'));
    board.appendChild(createColumn('column-3'));
    board.appendChild(createColumn('column-4'));
    board.classList.add('board');

    return board;
}


function createColumn(className) {
    const column = document.createElement('div');
    column.classList.add(className);

    return column;
}


export {addBoard};