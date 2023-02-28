import { createHeader } from './modules/createHeader.js';
import { createMainContainer } from './modules/createMainContainer.js';
import { createSidebar } from './modules/createSidebar.js';
import { createTodoList } from './modules/createTodoList.js';


const header = createHeader();
const mainContainer = createMainContainer();
const sidebar = createSidebar();
const todoList = createTodoList();

mainContainer.appendChild(sidebar);
mainContainer.appendChild(todoList);

document.body.appendChild(header);
document.body.appendChild(mainContainer);