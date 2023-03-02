import { createHeader } from './modules/createHeader.js';
import { createMainContainer } from './modules/createMainContainer.js';
import { createSidebar } from './modules/createSidebar.js';
import { createTodoList } from './modules/createTodoList.js';
import { createModal } from './modules/createModal.js';
import { displayTodos, clear } from './modules/manageLocalStorage.js';

const header = createHeader();
const mainContainer = createMainContainer();
const sidebar = createSidebar();
const todoList = createTodoList();
const modal = createModal();

mainContainer.appendChild(sidebar);
mainContainer.appendChild(todoList);

document.body.appendChild(header);
document.body.appendChild(mainContainer);
document.body.appendChild(modal);

displayTodos();
clear();