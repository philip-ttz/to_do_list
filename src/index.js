import './styles/index.css';
import './styles/overlay.css';

import Overlay from './scripts/overlay.js';
import Displaying from './scripts/displaying.js';
import create_to_do from './scripts/create_to_do.js';
import create_project from './scripts/create_project.js';

const form = document.querySelector('.form');
const form2 = document.querySelector('.form2');
let projects = {"All" : [], "Today" : []};

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    document.querySelector(".overlay").classList.toggle('hidden');
    projects[currentproject].push(create_to_do(data.title, data.description, data.dueDate, data.priority));
    console.log(projects);
    form.reset();
});
form2.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form2);
    const data = Object.fromEntries(formData.entries());
    document.querySelector(".overlay_2").classList.toggle('hidden');
    create_project(data.title, projects);
    console.log(projects);
    Displaying.display_project_overview(projects, Overlay.currentproject);
    Overlay.update_project_overview();
    console.log(Overlay.currentproject);
    form2.reset();
});


Overlay.initialize();