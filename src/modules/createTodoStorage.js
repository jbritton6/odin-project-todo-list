function initializeLocalStorage() {
    if (!localStorage.getItem('todos')) {
        localStorage.setItem('todos', []);
    }
}

export { initializeLocalStorage }