import '../styles/styles.css'

function createMainContainer() {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');

    return mainContainer;
}

export { createMainContainer };