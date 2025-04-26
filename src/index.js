import './styles/index.css';
import './styles/overlay.css';

import Overlay from './scripts/overlay.js';
import Displaying from './scripts/displaying.js';
import create_to_do from './scripts/create_to_do.js';
import create_project from './scripts/create_project.js';
import { set_storage, load_storage } from './scripts/local_storage.js';

const form = document.querySelector('.form');
const form2 = document.querySelector('.form2');
const projects_in_form = document.getElementById('project');
let projects = load_storage();
Displaying.display_task_overview(projects, Overlay.currentproject);
Displaying.display_project_overview(projects, Overlay.currentproject);  

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    document.querySelector(".overlay").classList.toggle('hidden');
    const newTask = create_to_do(data.title, data.description, data.duedate, data.priority);
    projects[data.project].push(newTask);
    if (data.project != "All") {
        projects["All"].push(newTask);
    }
    if (isToday(new Date(data.duedate))) {
        projects["Today"].push(newTask);
    }
    Displaying.display_task_overview(projects, Overlay.currentproject);
    set_storage(projects);
    form.reset();
});
form2.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form2);
    const data = Object.fromEntries(formData.entries());
    document.querySelector(".overlay_2").classList.toggle('hidden');
    create_project(data.title, projects);
    Displaying.display_project_overview(projects, Overlay.currentproject);
    Overlay.update_project_overview();
    projects_in_form.innerHTML = ''; // Clear previous options
    Object.keys(projects).forEach((project) => {
        if (project === "Today") return;
        const projectElement = document.createElement('option');
        projectElement.value = project;
        projectElement.textContent = project;
        projects_in_form.appendChild(projectElement);
    });
    set_storage(projects);
    form2.reset();
});
document.addEventListener('radioChange', () => {
    Displaying.display_task_overview(projects, Overlay.currentproject);
});

document.addEventListener('completedTask', (event) => {
    const completedTask = event.detail.taskTitle;
    const projectName = event.detail.projectName;
    let dateOfDeletedTask;
    Object.values(projects).forEach((project) => {
        project.forEach((task, index) => {
            if (task.title === completedTask) {
                dateOfDeletedTask = task.dueDate;
                console.log(dateOfDeletedTask, "Date of deleted task")
                project.splice(index, 1)
            }
        });
    });
    Displaying.display_task_overview(projects, Overlay.currentproject);
    set_storage(projects);
});

Overlay.initialize();

function isToday(date) {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate();
}