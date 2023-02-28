import { createHeader } from './modules/createHeader.js';
import { createMainContainer } from './modules/createMainContainer.js';
import { createSidebar } from './modules/createSidebar.js';


const header = createHeader();
const mainContainer = createMainContainer();
const sidebar = createSidebar();

mainContainer.appendChild(sidebar);

document.body.appendChild(header);
document.body.appendChild(mainContainer);