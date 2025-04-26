import "../styles/display.css";

class Displaying {
    #main;
    #projects

    constructor() {
        this.#main = document.querySelector('main');
        this.#projects = document.querySelector('.radio-inputs');
    }

    display_project_overview(projects, currentproject) {
        this.#projects.innerHTML = ''; // Clear previous project elements

        Object.keys(projects).forEach((project) => {
            const projectElement = document.createElement('label');
            projectElement.classList.add('radio');

            const isChecked = project === currentproject;

            projectElement.innerHTML = `
                <input type="radio" ${isChecked ? 'checked' : ''} name="radio" value="${project}">
                <span class="name">${project}</span>
            `;

            this.#projects.appendChild(projectElement);
        });
    }

    display_task_overview(projects, currentproject) {
        this.#main.innerHTML = '';

        projects[currentproject].forEach((task) => {
            const card = document.createElement('div');
            card.classList.add('card');
            const card_inner = document.createElement('div');
            card_inner.classList.add('card-inner');
            const card_front = document.createElement('div');
            card_front.classList.add('card-front');
            const card_back = document.createElement('div');
            card_back.classList.add('card-back');

            card_front.innerHTML = `
                <p>${task.title}</p>
            `;
            card_back.innerHTML = `
                <p>${task.description}</p>
                <p>${task.dueDate}</p>
                <p>${task.priority}</p>
                <p>${task.completed}</p>
            `;

            card.appendChild(card_inner);
            card_inner.appendChild(card_front);
            card_inner.appendChild(card_back);

            this.#main.appendChild(card);
        })
    }
}

export default new Displaying();