function set_storage(projects) {
    localStorage.clear();
    localStorage.setItem('projects', JSON.stringify(projects));
}

function load_storage() {
    const storedProjects = JSON.parse(localStorage.getItem('projects'));
    if (storedProjects) {
        return storedProjects;
    } else {
        return { "All": [], "Today": [] };
    }
}

export { set_storage, load_storage };