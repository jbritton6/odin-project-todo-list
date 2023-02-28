import '../styles/styles.css'

function createSidebar() {
    const sideBar = document.createElement('div');
    sideBar.classList.add('sidebar');

    return sideBar;
}

export { createSidebar };