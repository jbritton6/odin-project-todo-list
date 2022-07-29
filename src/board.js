import './styles/styles.css'


function createBoard() {
    const board = document.createElement('div');

    board.appendChild(createColumn('new-note'));
    board.classList.add('board');

    return board;
}


function createColumn(className) {
    const column = document.createElement('div');
    column.classList.add(className);

    return column;
}


export {createBoard};