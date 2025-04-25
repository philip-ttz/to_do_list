export default function create_project(name, projects) {
    if (projects[name]) {
        console.error(`Project with name "${name}" already exists.`);
        return;
    }
    projects[name] = []; // Initialize the project with an empty array for tasks
}